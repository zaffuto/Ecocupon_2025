from flask import Flask, render_template, request, jsonify, send_file, send_from_directory
import qrcode
from io import BytesIO
import base64
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)

# Configuración de la base de datos
DATABASE_URL = os.getenv('DATABASE_URL', os.getenv('cupon_POSTGRES_URL'))  # Intentar ambos nombres de variables
if DATABASE_URL:
    # Asegurarse de que la URL comience con postgresql://
    if DATABASE_URL.startswith('postgres://'):
        DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'connect_args': {
            'sslmode': os.getenv('SSL_MODE', 'require')
        }
    }
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cupones.db'

# Configuración de la aplicación
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.getenv('cupon_SUPABASE_JWT_SECRET', 'default-secret-key'))
app.debug = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'

db = SQLAlchemy(app)

class Cupon(db.Model):
    __tablename__ = 'cupones'
    id = db.Column(db.Integer, primary_key=True)
    contenido = db.Column(db.String(200), nullable=False)
    fecha_creacion = db.Column(db.DateTime, default=datetime.utcnow)

# Create tables in a context
with app.app_context():
    try:
        db.create_all()
    except Exception as e:
        print(f"Database initialization error: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/robots.txt')
def robots():
    return send_from_directory('static', 'robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static', 'sitemap.xml')

@app.route('/favicon.png')
def favicon():
    return send_from_directory('static', 'favicon.png')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/generar-qr', methods=['POST'])
def generar_qr():
    try:
        data = request.json.get('texto', '')
        if not data:
            return jsonify({'error': 'No se proporcionó texto'}), 400
        
        # Crear QR
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(data)
        qr.make(fit=True)

        # Crear imagen
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Guardar en BytesIO
        img_io = BytesIO()
        img.save(img_io, 'PNG')
        img_io.seek(0)
        
        # Convertir a base64
        img_str = base64.b64encode(img_io.getvalue()).decode()

        try:
            # Guardar en la base de datos
            nuevo_cupon = Cupon(contenido=data)
            db.session.add(nuevo_cupon)
            db.session.commit()
        except Exception as e:
            print(f"Database error: {e}")
            # Continuar incluso si hay error en la base de datos
            # El usuario aún obtiene su QR

        return jsonify({
            'qr_code': img_str,
            'mensaje': 'QR generado exitosamente'
        })
    except Exception as e:
        print(f"Error general: {e}")
        return jsonify({'error': 'Error interno del servidor'}), 500

# For Vercel serverless deployment
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

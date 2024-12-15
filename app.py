from flask import Flask, render_template, request, jsonify, send_file
import qrcode
from io import BytesIO
import base64
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Use SQLite for development and PostgreSQL for production
if os.environ.get('VERCEL_ENV') == 'production':
    # For Vercel, we'll use a temporary SQLite database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tmp/cupones.db'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cupones.db'

db = SQLAlchemy(app)

class Cupon(db.Model):
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

@app.route('/generar-qr', methods=['POST'])
def generar_qr():
    data = request.json.get('texto', '')
    
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

    return jsonify({
        'qr_code': img_str,
        'mensaje': 'QR generado exitosamente'
    })

# For Vercel serverless deployment
app.debug = True

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))

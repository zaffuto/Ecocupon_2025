# Eco Cupon QR

Una aplicación web para generar cupones QR ecológicos. Similar a qrcodekit.com pero enfocado en cupones eco-amigables.

## Características

- Generación de códigos QR para cupones
- Diseño moderno y responsivo
- Almacenamiento de historial de cupones generados
- Interfaz fácil de usar

## Requisitos

- Python 3.8 o superior
- PostgreSQL (a través de Supabase)
- Cuenta en Vercel (para deployment)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/zaffuto/Ecocupon.git
```

2. Crear y configurar el archivo de variables de entorno:
```bash
cp .env.example .env.local
```
Edita el archivo `.env.local` con tus credenciales de Supabase.

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Ejecutar la aplicación:
```bash
python app.py
```

## Variables de Entorno

La aplicación requiere las siguientes variables de entorno:

- `cupon_POSTGRES_URL`: URL completa de conexión a PostgreSQL
- `cupon_POSTGRES_USER`: Usuario de PostgreSQL
- `cupon_POSTGRES_PASSWORD`: Contraseña de PostgreSQL
- `cupon_POSTGRES_HOST`: Host de PostgreSQL
- `cupon_POSTGRES_DATABASE`: Nombre de la base de datos

Para Supabase:
- `cupon_SUPABASE_URL`: URL de tu proyecto en Supabase
- `cupon_SUPABASE_JWT_SECRET`: JWT secret de Supabase
- `cupon_SUPABASE_SERVICE_ROLE_KEY`: Service role key de Supabase
- `cupon_NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon key de Supabase

## Deployment

La aplicación está configurada para desplegarse automáticamente en Vercel. Asegúrate de:

1. Conectar tu repositorio de GitHub con Vercel
2. Configurar las variables de entorno en el panel de Vercel
3. Configurar el dominio personalizado si es necesario

## Seguridad

- Nunca comitees archivos `.env` o `.env.local` al repositorio
- Mantén las claves de API y credenciales seguras
- Usa HTTPS para todas las conexiones
- Mantén las dependencias actualizadas

## Tecnologías utilizadas

- Flask
- PostgreSQL (Supabase)
- HTML5/CSS3
- JavaScript
- Tailwind CSS

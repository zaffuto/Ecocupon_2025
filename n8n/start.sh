#!/bin/bash

# Detener n8n si está corriendo
n8n stop 2>/dev/null

# Esperar un momento
sleep 2

# Establecer variables de entorno
export N8N_USER_FOLDER="/Users/macbook/.n8n"
export N8N_ENCRYPTION_KEY="un-valor-aleatorio-seguro"

# Cargar variables desde .env si existe
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Iniciar n8n en modo túnel
n8n start --tunnel

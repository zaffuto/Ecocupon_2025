#!/bin/bash

# Función para verificar si un proceso está usando el puerto 5678
check_port() {
    lsof -i :5678 >/dev/null 2>&1
    return $?
}

# Función para detener n8n y limpiar el puerto 5678
stop_n8n() {
    echo "Deteniendo n8n y limpiando el puerto 5678..."
    n8n stop 2>/dev/null
    
    # Si hay algún proceso usando el puerto 5678, lo matamos
    if check_port; then
        pid=$(lsof -t -i :5678)
        if [ ! -z "$pid" ]; then
            echo "Matando proceso en puerto 5678 (PID: $pid)..."
            kill -9 $pid
        fi
    fi
}

# Función para cargar credenciales desde el archivo JSON
load_credentials() {
    if [ ! -f "./config/credentials.json" ]; then
        echo "Error: No se encuentra el archivo de credenciales"
        exit 1
    fi
    
    # Usar jq para parsear el JSON (asegúrate de tener jq instalado)
    if ! command -v jq &> /dev/null; then
        echo "Instalando jq..."
        brew install jq
    fi
    
    STORE_DOMAIN=$(jq -r '.shopify.store_domain' ./config/credentials.json)
    API_KEY=$(jq -r '.shopify.api_key' ./config/credentials.json)
    ACCESS_TOKEN=$(jq -r '.shopify.access_token' ./config/credentials.json)
}

# Función para configurar las variables de entorno
setup_env() {
    echo "Configurando variables de entorno..."
    cat > .env << EOF
N8N_SHOPIFY_STORE_DOMAIN=$STORE_DOMAIN
N8N_SHOPIFY_API_KEY=$API_KEY
N8N_SHOPIFY_ACCESS_TOKEN=$ACCESS_TOKEN
EOF
}

# Función para instalar dependencias necesarias
install_dependencies() {
    echo "Instalando dependencias..."
    npm install -g n8n
    
    # Instalar nodos de la comunidad si es necesario
    if [ -f "./install-nodes.sh" ]; then
        echo "Instalando nodos de la comunidad..."
        bash ./install-nodes.sh
    fi
}

# Función para importar workflows
import_workflows() {
    echo "Importando workflows..."
    # Aquí puedes agregar lógica para importar workflows automáticamente
    # Por ahora, necesitarás importarlos manualmente desde la interfaz web
}

# Función principal
main() {
    echo "Iniciando configuración de n8n..."
    
    # Detener n8n si está corriendo
    stop_n8n
    
    # Esperar a que el puerto se libere
    while check_port; do
        echo "Esperando a que el puerto 5678 se libere..."
        sleep 2
    done
    
    # Cargar credenciales
    load_credentials
    
    # Configurar environment
    setup_env
    
    # Instalar dependencias si es necesario
    if ! command -v n8n &> /dev/null; then
        install_dependencies
    fi
    
    # Importar workflows
    import_workflows
    
    # Iniciar n8n
    echo "Iniciando n8n..."
    ./start.sh
}

# Ejecutar el script
main

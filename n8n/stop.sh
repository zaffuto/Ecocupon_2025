#!/bin/bash

# Función para verificar si un proceso está usando el puerto 5678
check_port() {
    lsof -i :5678 >/dev/null 2>&1
    return $?
}

# Detener n8n
n8n stop 2>/dev/null

# Si hay algún proceso usando el puerto 5678, lo matamos
if check_port; then
    pid=$(lsof -t -i :5678)
    if [ ! -z "$pid" ]; then
        echo "Matando proceso en puerto 5678 (PID: $pid)..."
        kill -9 $pid
    fi
fi

echo "n8n detenido correctamente"

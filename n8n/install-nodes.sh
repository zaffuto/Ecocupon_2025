#!/bin/bash

# Instalar nodos comunes útiles para e-commerce
npm install -g n8n-nodes-shopify
npm install -g n8n-nodes-whatsapp-business
npm install -g n8n-nodes-google-sheets
npm install -g n8n-nodes-sheetdb

# Reiniciar n8n para cargar los nuevos nodos
n8n stop
n8n start

# EcoCupon

Plataforma de generación de cupones de descuento por reciclaje según la ley REP.

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- QR Code Generator

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/ecocupon.git
cd ecocupon
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```
Editar `.env.local` con tus configuraciones.

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## Estructura del Proyecto

```
src/
  ├── app/              # Rutas y páginas de Next.js
  ├── components/       # Componentes React reutilizables
  ├── lib/             # Utilidades y funciones auxiliares
  └── types/           # Definiciones de tipos TypeScript
```

## Características

- Generación de QR para descuentos
- Integración con WhatsApp para comunicación
- Diseño responsivo y moderno
- Optimizado para SEO

## Seguridad

- Headers de seguridad configurados
- Sanitización de entradas
- Variables de entorno protegidas
- TypeScript strict mode

## Contribuir

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit los cambios (`git commit -m 'feat: Agregar nueva caracteristica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

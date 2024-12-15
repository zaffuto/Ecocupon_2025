import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,tsx}",
    babel: {
      plugins: [],
      babelrc: false,
      configFile: false,
    },
  })],
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

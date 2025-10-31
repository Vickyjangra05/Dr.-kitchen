import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss() ],
  server: {
    allowedHosts: [
      'nonfungible-crinal-veola.ngrok-free.dev'
    ],
    proxy: {
      // This will proxy any request starting with /api to your backend server
      '/api': {
        target: 'http://localhost:8000', // Change this if your backend runs on a different port
        changeOrigin: true, // Recommended for avoiding CORS issues
        secure: false,      // Set to false for local development with http
      },
    },
  },
})

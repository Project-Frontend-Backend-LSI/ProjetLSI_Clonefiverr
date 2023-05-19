import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      defaultHeight: 600 // Remplacez par la hauteur souhaitée
    }
  },
  theme: {
    darkMode: false, // Désactive le mode sombre
  },
})



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,  // ← Añade esto
      interval: 100      // ← Revisa cambios cada 100ms
    }
  },
  preview: {
    port: 5173
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@absolute':'/src',
      '@Hooks':'/src/hooks'
    },
  },
  server:{
    allowedHosts:"db253ffb6a9b.ngrok-free.ap"
  }
})

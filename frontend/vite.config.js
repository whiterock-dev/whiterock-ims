import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const proxyTarget = process.env.VITE_DEV_API_PROXY_TARGET

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: proxyTarget ? { '/api': proxyTarget } : undefined,
  },
})

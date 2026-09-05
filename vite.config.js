import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/JayanthiTest/',
  server: {
    host: '127.0.0.1', // bind IPv4 so http://localhost:5173 resolves correctly
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/Yohwan-Resume-Website/',
  plugins: [react(), tailwindcss()],
})

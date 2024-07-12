import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://shivam422.github.io/', // This is the path to your GitHub Pages
  plugins: [react()],
})

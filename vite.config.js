import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct config for your setup
export default defineConfig({
  plugins: [react()],
  root: '.', // current folder is the project root
  base: './', // important for relative paths when building
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})

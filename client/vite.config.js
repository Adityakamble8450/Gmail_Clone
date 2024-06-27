import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {  loadEnv } from 'vite'

// https://vitejs.dev/config/
// const env = loadEnv(mode, process.cwd(), '');
export default defineConfig({
  plugins: [react()],
})


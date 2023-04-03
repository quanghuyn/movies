import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

import path from "path-browserify"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})
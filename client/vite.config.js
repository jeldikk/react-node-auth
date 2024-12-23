import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./tests/setup.js", "./src/setupTests.js"],
    testMatch: ['./src/**/*.test.tsx'],
    css: true
  },
  server: {
    port: 5173,
    strict: true
  }
})

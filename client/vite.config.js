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
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ["text", "json", "html"]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true
      }
    },
    cors: false
  }
})

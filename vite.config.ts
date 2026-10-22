import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // Der SSR-Build (dist-ssr) dient nur dem Vorrendern, public/ nicht nochmal kopieren
    copyPublicDir: !isSsrBuild,
  },
}))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jluchett.github.io.git/', // Reemplaza 'nombre-del-repositorio' con tu nombre de repo
})

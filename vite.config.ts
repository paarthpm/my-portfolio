import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repositoryName = 'my-portfolio';
// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [react()],
})

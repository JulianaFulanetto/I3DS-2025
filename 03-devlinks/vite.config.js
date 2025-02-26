import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
    port:3000, //Porta para a aconexão, altere quando necessario
    open:true, //Abre automaticamneto o navegador e inicia o server
  }
})
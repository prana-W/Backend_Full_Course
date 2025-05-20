import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      /* When /api is detected, the below will automatically get appended before it and it will get proxied,  and it
       will appear to server as if the request is made from the appended url.
      */
      '/api' : 'http://localhost:3000',
      //Here we will enter the link for our server
    }
  }
})

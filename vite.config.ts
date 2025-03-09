import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/twitter-ui/",
  plugins: [

    tailwindcss(),
  ],
})




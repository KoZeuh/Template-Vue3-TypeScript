import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteSassDts from 'vite-plugin-sass-dts'

export default defineConfig({
  plugins: [
    vue(),
    ViteSassDts()
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      /* '/ws': { 
        // If you are using WebSockets
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
      }, */
    },
  },
})
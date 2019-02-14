module.exports = {
  devServer: {
    port: 8282,
    proxy: {
      '/api': {
        target: 'https://api.rozwel.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}

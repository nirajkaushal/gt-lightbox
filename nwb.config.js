module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'GTLightbox',
      externals: {
        react: 'React'
      }
    }
  }
}

module.exports = {
  transpileDependencies: ["vuetify"],
  // css: {extract: false},
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/slot-ui.js")
      .end();
  }
};

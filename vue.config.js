const config = require("./src/config");

module.exports = {
  publicPath: process.env.NODE_ENV === `production` ? config.publicPath : "/",
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/]
};

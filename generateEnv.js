const config = require("./src/config");
const fs = require("fs");
const _ = require("lodash");
const envfile = require("envfile");

let env = "";
_.each(config.meta, function(value, key) {
  //key = key.toUpperCase()
  env = env + `VUE_APP_${key.toUpperCase()}="${value}"\n`;
});

console.log(env);

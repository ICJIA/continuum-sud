/* eslint-disable no-console */
const config = require("./src/config");
const fs = require("fs");
const _ = require("lodash");

let env = "";
_.each(config.meta, function(value, key) {
  //key = key.toUpperCase()
  env = env + `VUE_APP_${key.toUpperCase()}="${value}"\n`;
});

fs.writeFile(".env", env, function(err) {
  if (err) return console.log(err);
  console.log(".env file written");
});

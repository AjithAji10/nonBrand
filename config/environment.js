const envLocal = require("./env.local.json");
const envTest = require("./env.test.json");
const envProd = require("./env.prod.json");
const envStaging = require("./env.staging.json");

const config = process.env.REACT_APP_ENV;
// const config = "dev"

console.log(config, "CONFIG");
var env;
if (config == "local") {
  env = envLocal;
} else if (config == "test") {
  env = envTest;
} else if (config == "prod") {
  env = envProd;
} else if (config == "staging") {
  env = envStaging;
} else {
  env = envLocal;
}

module.exports = function (key) {
  if (key === undefined || key === null) {
    return null;
  }

  key = key + "";

  var key_segment = key.split(".");
  var value = env;
  for (var i = 0; i < key_segment.length; i++) {
    var segment_name = key_segment[i];
    if (value[segment_name] === undefined) {
      return null;
    } else {
      value = value[segment_name];
    }
  }
  return value;
};

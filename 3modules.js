//commonjs, every file is a module by default
//modules are encapsulated code (we only share the minimum)

const names = require("./4names");
const sayHi = require("./5utils");
const data = require("./6altflavor");
require("./7mindbomb");
sayHi("susan");
sayHi(names.peter);
sayHi(names.john);

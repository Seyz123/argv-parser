var parser = require("./");

// getArgs()
console.log(parser.getArgs());

// argExists()
console.log(parser.argExists("good"));
console.log(parser.argExists("novalue"));

// getArg()
console.log(parser.getArg("good"));
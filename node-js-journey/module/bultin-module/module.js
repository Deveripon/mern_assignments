const fs = require("fs");
fs.readFile("new.js", (err, data) => {
  console.log(data.toString());
});

//import dependencies
const http = require("http");
const colors = require("colors");

//define port number
const port = 5050;
//create a new server
http.createServer((req, res) => {
    res.write("This is my first nodejs server");
    res.end();
}).listen(port, () => {
    console.log(`Server is running on port : ${port} Thank You `.bgGreen.blue.bold);
});

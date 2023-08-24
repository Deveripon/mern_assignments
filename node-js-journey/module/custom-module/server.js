const Api = require("./Api");
const { storage, url, path, name } = require("./Storage");

class Server extends Api {
  constructor() {
    super();
  }
}

const server = new Server();
console.log(server.myApi());
console.log(storage());
console.log(url());
console.log(path);
console.log(name);

const App = require("./app");

class Staff extends App {
  constructor() {
    super();
    this.myAppFunc = () => {
      return "this is from the staff";
    };
  }
}

const staff = new Staff();
console.log(staff.myAppFunc());

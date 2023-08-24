const Student = require("./student");
class App extends Student {
  constructor() {
    super(studentInfo, marks);
  }
  myAppFunc() {
    return `this is from myApp`;
  }
}

const studentInfo = {
  name: "Ripon Miah",
  fatherName: "Abdul Munnaf",
  motherName: "Lilyara Begum",
  address: "Govindanagar,Nalitabari,Sherpur",
  gender: "Male",
  mobile: "01913509868",
  age: 30,
  skill: "laravel",
};
const marks = {
  bn: 90,
  en: 80,
  math: 90,
  sci: 90,
  sSci: 75,
  reli: 90,
};
const app = new App(studentInfo, marks);
module.exports = App;

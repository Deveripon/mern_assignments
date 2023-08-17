/**
 * Constractor Function is Like a Bundle of methods and properties.we use this function for storing releted functions and parameters in a One Main Function. When need to use we just simply calling by making an instance of it.
 */
//Lets Make a result calculation function
function Result(stuInfo, stuMarks) {
  // lets try to get students info and marks via argument of constractor function

  //Student Information
  this.studentName = stuInfo.studentName;
  this.studentRoll = stuInfo.studentRoll;
  this.class = stuInfo.class;
  //Subject wise Student Marks
  this.ban = stuMarks.ban;
  this.eng = stuMarks.eng;
  this.math = stuMarks.math;
  this.sci = stuMarks.sci;
  this.sSci = stuMarks.sSci;
  this.reli = stuMarks.reli;

  //lets find Subject wise gpa
  this.gpaCal = function (subMarks) {
    if (this[subMarks] >= 0 && this[subMarks] < 33) return 0;
    if (this[subMarks] >= 33 && this[subMarks] < 40) return 1;
    if (this[subMarks] >= 40 && this[subMarks] < 50) return 2;
    if (this[subMarks] >= 50 && this[subMarks] < 60) return 3;
    if (this[subMarks] >= 60 && this[subMarks] < 70) return 3.5;
    if (this[subMarks] >= 70 && this[subMarks] < 80) return 4;
    if (this[subMarks] >= 80 && this[subMarks] <= 100) return 5;
  }
  //lets find Subject wise grade
  this.gradeCal = function (sub) {
    if (this.gpaCal([sub]) >= 0 && this.gpaCal([sub]) < 1) return "F";
    if (this.gpaCal([sub]) >= 1 && this.gpaCal([sub]) < 2) return "D";
    if (this.gpaCal([sub]) >= 2 && this.gpaCal([sub]) < 3) return "C";
    if (this.gpaCal([sub]) >= 3 && this.gpaCal([sub]) < 3.5) return "B";
    if (this.gpaCal([sub]) >= 3.5 && this.gpaCal([sub]) < 4) return "A-";
    if (this.gpaCal([sub]) >= 4 && this.gpaCal([sub]) < 5) return "A";
    if (this.gpaCal([sub]) === 5) return "A+";
  }
  //lets calculate the CGPA
  this.cgpaCal = function () {
    if (this.ban < 33 || this.eng < 33 || this.math < 33 || this.sci < 33 || this.sSci < 33 || this.reli < 33) {
      return 0;
    } else {
      const sumOfGpa = this.gpaCal("ban") + this.gpaCal("eng") + this.gpaCal("math") + this.gpaCal("sci") + this.gpaCal("sSci") + this.gpaCal("reli");
      const total = sumOfGpa / 6;
      return total === 5 ? total : total.toFixed(2)
    }
  }
  //lets get the final result status
  this.finalResult = function () {
    if (this.cgpaCal() >= 1) return "Passed";
    else return "Failed";
  }

}
//this is the subject wise marks of Student Ripon Miah and He Read in Class 10
const StudentInfo = {
  studentName: "Ripon Miah",
  studentRoll: 1,
  class: 10
}
const StudentMarks = {
  ban: 99,
  eng: 79,
  math: 85,
  sci: 90,
  sSci: 96,
  reli: 97
}

// lets try to pass thoso object as a parameter of the constructor function 
// get instance of the constructor function
const result = new Result(StudentInfo, StudentMarks);



console.log(`
SUBJECT           GPA           GRADE
____________________________________________

ban : ${result.ban}        = GPA : ${result.gpaCal("ban")}   = Grade : ${result.gradeCal("ban")}
eng : ${result.eng}        = GPA : ${result.gpaCal("eng")}   = Grade : ${result.gradeCal("eng")}  
math : ${result.math}       = GPA : ${result.gpaCal("math")}   = Grade : ${result.gradeCal("math")} 
sci : ${result.sci}        = GPA : ${result.gpaCal("sci")}   = Grade : ${result.gradeCal("sci")} 
sSci : ${result.sSci}       = GPA : ${result.gpaCal("sSci")}   = Grade : ${result.gradeCal("sSci")} 
reli : ${result.reli}       = GPA : ${result.gpaCal("reli")}   = Grade : ${result.gradeCal("reli")}   

____________________________________________

CGPA : ${result.cgpaCal()}          ${result.finalResult()}

`);
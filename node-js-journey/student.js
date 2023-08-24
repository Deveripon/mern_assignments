class Student {
  constructor(info, marks) {
    //get student information
    this.name = info.name;
    this.fatherName = info.fatherName;
    this.motherName = info.motherName;
    this.address = info.address;
    this.gender = info.gender;
    this.mobile = info.mobile;
    this.age = info.age;
    this.skill = info.skill;
    //get student marks
    this.bn = marks.bn;
    this.en = marks.en;
    this.math = marks.math;
    this.sci = marks.sci;
    this.sSci = marks.sSci;
    this.reli = marks.reli;
  }
  //get subject wais gpa
  gpa(marksOfSub) {
    if (this[marksOfSub] > 0 && this[marksOfSub] < 33) return 0;
    if (this[marksOfSub] > 33 && this[marksOfSub] < 40) return 1;
    if (this[marksOfSub] > 40 && this[marksOfSub] < 50) return 2;
    if (this[marksOfSub] > 50 && this[marksOfSub] < 60) return 3;
    if (this[marksOfSub] > 60 && this[marksOfSub] < 70) return 3.5;
    if (this[marksOfSub] > 70 && this[marksOfSub] < 80) return 4;
    if (this[marksOfSub] > 80 && this[marksOfSub] <= 100) return 5;
  }
}
module.exports = Student;

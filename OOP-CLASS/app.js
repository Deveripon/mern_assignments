class App extends Result {
  constructor(name, age, skill, sallery, ban, eng, math) {
    super(ban, eng, math);
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.sallery = sallery;
    this.info = function () {
      return `Hi ! this is ${this.name} and I am ${this.age} years old and I am ${this.skill} developer and my yearly salary is ${this.sallery}`;
    }
  }
  hobby(hobby) {
    return `I am ${this.name} and I am ${this.age} years old I love ${hobby}`;
  }
  myResultFunc() {
    return (this.ban + this.eng + this.math) + " " + `is amarrrrrrrr result function`;
  }
}
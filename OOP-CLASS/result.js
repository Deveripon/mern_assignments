class Result {
  constructor(ban, eng, math) {
    this.ban = ban;
    this.eng = eng;
    this.math = math;
  }
  myResultFunc() {
    return (this.ban + this.eng + this.math) + " " + `is your result function`;
  }
}
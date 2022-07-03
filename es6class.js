class Student{
  constructor(firstName, lastName, rollNo, gender, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.gender = gender;
    this.dob = new Date(dob);
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear(){
    return this.dob.getFullYear();
  }
}
const s1 = new Student('sri','akshintala', 02, 'M', '08-30-1996');
console.log(s1.getBirthYear());
console.log(s1.getFullName());
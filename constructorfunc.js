function Student(firstName, lastName, rollNum, gender, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.rollNum = rollNum;
  this.gender = gender;
  this.dob = new Date(dob);
  this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
  this.getFullName = function(){
    // if(s1.getBirthYear() < s2.getBirthYear())
    // return s1.firstName;
    
    // else{
    //   return s2.firstName;
    // }
    return `${firstName} ${lastName}`;
  }
}
const s1 = new Student('sri harsha', 'akshintala', 02, 'M', '08-30-1996');
const s2 = new Student('charan', 'pithani', 40, 'M', '08-20-1995');

console.log(s2.getBirthYear());
console.log(s2.getFullName());


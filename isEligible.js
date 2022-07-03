
function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
  if (this.age > minAge) {
    console.log(this.name + " is egligible");
  } else {
    console.log(this.name + " is Not Egligible");
  }
};

const person1 = new Person("sri", 10);
const person2 = new Person("charan", 20);

person1.findegligibleOrNot(18);
person2.findegligibleOrNot(18);
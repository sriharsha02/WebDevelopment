const person = {
  name : 'sri',
  age : 25,
  greet(){
    console.log('Hi !! I am' + this.name);
  }
};
//destruturing inside a function
const printName = ({name}) =>{
  console.log(name);
}
printName(person);
//destruturing outside a function
const {name, age} = person;
console.log(name, age);
//destructuring arrays
const hobbies = ['Swimming', 'Reading'];
//Unlike object destructuring , we can choose any name here as variables
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

let name = {
  firstName : 'Sri',
  lastName : 'Harsha'
}
let printName = function(city, state){
  console.log(this.firstName + ' ' + this.lastName + ' From ' + city + state);
}

let name2 = {
  firstName : 'Charan',
  lastName : 'Pithani'
}
printName.call(name, 'Railway Kodur', 'Andhra Pradesh');
//apply uses list of arguments
printName.apply(name2, ['Visakhapatnam', 'Andhra Pradesh']);
//using bind
let printMyName = printName.bind(name2, 'Tirupati', 'Andhra Pradesh');
console.log(printMyName); // just holds the definition of printName function
printMyName();


//Creating a student object

let student = {
  age : 20
}
let printAge = function(){
  console.log(this.age);
}
console.log('Using Call method : ')
printAge.call(student);
console.log('Using apply method : ')
printAge.apply(student);
console.log('Using bind method : ')
let age = printAge.bind(student);
console.log(age);
age();

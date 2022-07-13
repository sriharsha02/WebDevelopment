
// //function statement
// function a(){
//   console.log('a is called');
// }

// //function expression
// var b = function(){
//   console.log('b is called');
// }

// //anonymous function
// // function (){

// // }
// //named function expression
// var a = function xyz(){
//   console.log(' b is called');
// }

// a();
// xyz();

//first class function

var a = function(param1){
  return function xyz(){

  }
}

console.log(a());

//currying in functions
function fullName(firstName){
  return (lastName)  => {
    return firstName + lastName; 
  }
}
console.log(fullName('Sri Harsha')('Akshintala'));
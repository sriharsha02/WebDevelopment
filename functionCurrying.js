// //function currying using bind method
let multiply = function (x , y){
  console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//function currying using closure

let multiplyByClosure = function(x){
  return function (y){
    console.log(x * y);
  }
}

let multiplyByTwoClosure = multiplyByClosure(2);
multiplyByTwoClosure(3);

let multiplyByThreeClosure = multiplyByClosure(3);
multiplyByThreeClosure(3);

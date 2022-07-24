const radius = [3,5,8,6];
// const calculateArea = function(radius){
//   output = [];
//   for(let i = 0; i < radius.length; i++){
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function(radius){
//   output = [];
//   for(let i = 0; i < radius.length; i++){
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//   output = [];
//   for(let i = 0; i < radius.length; i++){
//     output.push(2 * radius[i]);
//   }
//   return output;
// }
// console.log(calculateDiameter(radius));
const area = function(radius){
  return Math.PI * radius * radius;
}
const circumference = function(radius){
  return 2 * Math.PI * radius;
}
const diameter = function(radius){
  return 2 * radius;
}
const calculate = function(radius, logic){
  output = [];
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
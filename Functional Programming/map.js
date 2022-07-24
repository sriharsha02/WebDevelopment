const arr = [2,4,6,8];

const double = function(x){
  return 2 * x;
}

const binary = function(x){
  return x.toString(2);
}
const doubleOutput = arr.map(double);
// we can pass functions directly
const tripleOutput = arr.map(function(x){ 
  return x * 3;
});
const binaryOutput = arr.map(binary);
console.log(doubleOutput);
console.log(tripleOutput);
console.log(binaryOutput);


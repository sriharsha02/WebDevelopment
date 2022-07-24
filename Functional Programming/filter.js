const arr = [5,8,3,2,7,1];
function isEven(x){
  return x % 2 === 0;
}

const isEvenOutput = arr.filter(isEven);
const isOdd = arr.filter(function isOdd(x){
  return x % 2 !== 0; 
});
const greaterThanFive = arr.filter((x) => x > 5);
console.log(isEvenOutput);
console.log(isOdd);
console.log(greaterThanFive);


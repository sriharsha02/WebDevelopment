const arr = [3,9,1,4,8,2,7];

//finding the sum of elements in an array
function sum(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result = result + arr[i];
  }
  return result;
}
console.log(sum(arr));

//using reduce to find the sum
const sumOfArray = arr.reduce(function (acc, curr){
  //acc is similar to result in the sum function above
  //curr is same as arr[i] which refers to current element
  acc = acc + curr;
  return acc;
}, 0);
console.log(sumOfArray);
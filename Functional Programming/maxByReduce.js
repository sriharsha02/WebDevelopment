const arr = [2,7,9,1,6,8];
function findMax(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

//using reduce
const maxInArray = arr.reduce(function(acc, curr){
  if(curr > acc){
    acc = curr;
  }
  return acc;
}, 0);
console.log(maxInArray);
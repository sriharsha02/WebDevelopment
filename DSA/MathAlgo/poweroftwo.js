// complexity O(logn) as input is reduced by half in loop
function isPowerOfTwo(n){
  if(n < 1){
    return false;
  }
  while(n > 1){
    if(n % 2!== 0){
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(10));

// using bitwise operators time complexity becomes constant
function isPowerOfTwoBitWise(n){
  if(n < 1){
    return false;
  }
  return (n & (n - 1)) === 0; //irrespective of how large n is , this line runs only once
}
console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(10));

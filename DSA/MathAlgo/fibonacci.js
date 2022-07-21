//Returning an array of fib numbers
function fibonacci(n){
  const fib = [0, 1];
  for(let i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(5));
console.log(fibonacci(7));

// fib series upto n terms
console.log("fib series upto n terms: ");
let n1 = 0, n2 = 1, nextNum;
let n = 5;
for(let i = 0; i < n; i++){
  console.log(n1);
  nextNum = n1 + n2;
  n1 = n2;
  n2 = nextNum;
}
//fib series upto a certain number
console.log("fib series upto a certain number: ");
let s1 = 0, s2 = 1, nextTerm;
let certainNumber = 10;
console.log(s1);
console.log(s2);
nextTerm = s1 + s2;
while(nextTerm <= certainNumber){
  console.log(nextTerm);
  s1 = s2;
  s2 = nextTerm;
  nextTerm = s1 + s2;
}
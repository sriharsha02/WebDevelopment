const names = [
  {firstName : "Sri Harsha", lastName : "Akshintala", age: 25 },
  {firstName : "Charan Kumar", lastName : "Pithani", age : 25},
  {firstName : "Aslesh", lastName : "Akshinthala", age : 26},
  {firstName : "Nagabhushanam", lastName : "Akshinthala", age : 60},
  {firstName : "Rathna Kumari", lastName : "Akshinthala", age : 50}
];
const output = names.filter((x) => x.age < 30).map(function(x){
  return x.firstName;
});
console.log(output);

//using only reduce
const reduceOutput = names.reduce(function(acc, curr) {
  if(curr.age < 30){
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(reduceOutput);
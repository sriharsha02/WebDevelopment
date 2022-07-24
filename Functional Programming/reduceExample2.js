const names = [
  {firstName : "Sri Harsha", lastName : "Akshintala", age: 25 },
  {firstName : "Charan Kumar", lastName : "Pithani", age : 25},
  {firstName : "Aslesh", lastName : "Akshinthala", age : 26},
  {firstName : "Nagabhushanam", lastName : "Akshinthala", age : 60},
  {firstName : "Rathna Kumari", lastName : "Akshinthala", age : 50}
];
const output = names.reduce(function(acc, curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];

  }
  else{
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

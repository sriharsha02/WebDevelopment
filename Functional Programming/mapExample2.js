const names = [
  {firstName : "Sri Harsha", lastName : "Akshintala", age: 25 },
  {firstName : "Charan Kumar", lastName : "Pithani", age : 25},
  {firstName : "Aslesh", lastName : "Akshinthala", age : 26}
];
const fullName = names.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);
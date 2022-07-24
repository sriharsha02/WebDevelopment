const obj = {
  name : "Sri Harsha",
  age : 25,
};
obj.hobby = "Coding";
console.log(obj);
console.log(Object.keys(obj));//returns an array of key
console.log(Object.values(obj));//returns an array of values
console.log(Object.entries(obj));//returns an array of [key, value] pairs
console.log(obj.name);
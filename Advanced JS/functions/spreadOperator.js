let obj1 = {
  key1 : 'value1',
  key2 : 'value2'
}
let obj2 = obj1; // here we are passing the reference and not the value

obj2.key1 = 'value100'; // this will change obj1 also

console.log(obj1);

//Spread Opeartor

let names = {
  key1 : "Sri Harsha",
  key2 : "akshintala"
}

let names2 = {...names};
names2.key1 = "Harsha";
console.log(names2);
console.log(names);


//on arrays

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//on array of objects

const array1 = [{a : 1}, {b : 2}, {c : 3}];
const array2 = [4, 5];
const array3 = [...array1, ...array2, {d : 6}];
console.log(array3);
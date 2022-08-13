const names = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];
const newArray = names.map(modified); 
function modified(fruits, index){
  if(fruits.length === 0){
    return fruits + 'empty string';
  }else{
    return fruits;
  }
}
console.log(newArray);




const map = new Map([['a',1],['b',2]]);
//add an item 
map.set('c',3);
//deleting an item
map.delete('b');
//checking the size of map
console.log(map.size);
//checking the map has an element
console.log(map.has('c'));
//iterating through map items
for(const [key, value] of map){
  console.log(`${key} : ${value}`);
}
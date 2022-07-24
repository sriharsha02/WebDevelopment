const set = new Set([1,2,3]);

//adding an element
set.add(4);
//checking element is present
console.log(set.has(4));
//deleting an element
set.delete(3);
//checking the size
console.log(set.size);
//delete all the elements
set.clear();
console.log(set);
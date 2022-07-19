console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket');
const  promiseFriendBringsTicket = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('ticket');
  })
});
const getPopcorn = promiseFriendBringsTicket.then((t) => {
  console.log('Friend: I have the tickets')
  console.log('I : Lets go in');
  console.log('Friend: No! I am hungry');
  return new Promise((resolve, reject) => {resolve(`${t} Popcorn`)});
});
const getButter =  getPopcorn.then((t) =>{
  console.log('I : I got some popcorn');
  console.log('I : We Should go in');
  console.log('Friend: I need Butter');
  return new Promise((resolve, reject) => {resolve(`${t} Butter`)});
});
const addButter = getButter.then((t) => {
  console.log('I: Butter added to popcorn');
  console.log('I: Anything else needed ?');
  console.log('Friend: I need cold drink');
  return new Promise((resolve, reject) => {resolve(`${t} Drinks`)});
});
const getDrinks = addButter.then((t) => {
  console.log('I: Here is the cold drink');
  console.log('I: Anything else needed ?');
  console.log('Friend: Lets Go !!');
  return new Promise((resolve, reject) => {resolve(`${t} Person 3: shows ticket`)})
});

getDrinks.then((t) => console.log(t));
console.log('Person 4 shows ticket');
console.log('Person 5 shows ticket');
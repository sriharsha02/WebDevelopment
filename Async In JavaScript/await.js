console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket');
const preMovie = async() => {
  const promiseFriendBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => { resolve('Popcorn')});
  const addButter = new Promise((resolve, reject) => { resolve('butter')});
  const getDrinks = new Promise((resolve, reject) => { resolve('drinks')});
  let ticket = await promiseFriendBringsTicket;
  console.log(`Friend: I have the ${ticket}`);
  console.log('I: We should go in');
  console.log('Friend: No! I am hungry');
  let popcorn = await getPopcorn;
  console.log(`I : I got some ${popcorn} `);
  console.log('I : We Should go in');
  console.log('Friend: I need Butter on the popcorn');
  let butter = await addButter;
  console.log(`I: I got some ${butter} on the popcorn`);
  console.log('I: Anything else needed ?');
  console.log('Friend: I need cold drink');
  let drinks = await getDrinks;
  console.log(`I: ${drinks} are also ready`);
  console.log('Friend: Lets Go !!');

  return ticket;
}
preMovie().then((m) => console.log(`Person 3: shows ${m}`));
console.log('Person 4: shows ticket');
console.log('Person 5: shows ticket');
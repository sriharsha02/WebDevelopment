const personDetails = {
  firstName : 'Sri Harsha',
  lastName : 'Akshintala',
  age: 25,
  hobbies: ['coding', 'sports', 'movies', 'gardening'],
  address: {
    street : '3/84 Gangarajupuram',
    city: 'Railway Koduru',
    state: 'Andhra Pradesh'
  }
}
console.log(personDetails.hobbies[2]);
console.log(personDetails.address.state);

const personState = personDetails.map(function(todo){
  return todo.address.state;
})
console.log(personState);
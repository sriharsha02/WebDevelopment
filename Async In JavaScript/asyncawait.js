// const fs = require('fs');
// //create a promise
// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 2);
//   if(rand === 0){
//     resolve();
//   }
//   else{
//     reject();
//   }
// });
// myPromise
//   .then(() => {console.log('Success')})
//   .catch(() => {console.log('Something went Wrong')})

// //fs readfile with promises
// fs.promises
//   .readFile('./text1.txt',{encoding: 'utf-8'})
//   .then((data) => {console.log(data)})
//   .catch((err) => console.log('Something is wrong with the file.'))

// //async await 

// const loadFile = async() => {
//   const data = await fs.promises.readFile('text.txt', {encoding : 'utf-8'});
//   console.log(data);
// }
// loadFile();

//another promise example:

const hasmeeting = false;
const meeting = new Promise((resolve, reject) => {
  if(!hasmeeting){
    meetingDetails = {
      name : 'Daily Discussion',
      location : 'Skype',
      time : '12:00 PM'
    }
    resolve(meetingDetails);
  }
  else{
    reject( new Error('Meeting already scheduled'))
  }
})
meeting
  .then((res) => {
    console.log('Meeting Scheduled')
    console.log(res)})
  .then((err) => {
    console.log(err)
  });

  //promise.all

  const promise1 = Promise.resolve('Promise1 is completed');
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise2 is completed')
    }, 2000);
  })
  // promise1.then(res => {console.log(res)});
  // promise2.then(res => {console.log(res)});
  Promise.all([promise1, promise2]).then(resolve => console.log(resolve));
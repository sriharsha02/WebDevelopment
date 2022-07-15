import fetch from 'node-fetch';
console.log('start');
setTimeout(function callbackT(){
  console.log('callback setTimeout');
}, 5000);
fetch("https://api.netflix.com")
.then(function callbackF(){
  console.log('callback Netflix');
});
console.log('end');
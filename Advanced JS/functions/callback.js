//callback funciton
// settimeout will take the callback function and it wil
//store the function in separate space with a timer of 5000ms
//JS will not wait and it will move on to next steps
setTimeout(() => console.log('timer1 expired'), 1000);
setTimeout(()=> console.log('timer2 expired'), 0);

function x(y){
  console.log('inside x');
  y();

}
x(function y(){
  setTimeout(() => console.log('inside y'),0);
});
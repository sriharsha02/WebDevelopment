//callback funciton
// settimeout will take the callback function and it wil
//store the function in separate space with a timer of 5000ms
//JS will not wait and it will move on to next steps
setTimeout(function(){ 
  console.log('timer');
}, 5000)
function x(y){
  console.log('inside x');
  y();

}
x(function y(){
  console.log('inside y');
});
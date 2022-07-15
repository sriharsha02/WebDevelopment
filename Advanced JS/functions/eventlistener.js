
function attachEventListener(){
  let count = 0;
  document.getElementById('clickme').addEventListener('click',function xyz(){
    console.log('button clicked', count++);
  });
}
attachEventListener(); 

function documentLoaded(){
  document.addEventListener('DOMContentLoaded', function abc(){
    console.log('DOM has loaded');
  });
}
documentLoaded();


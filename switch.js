const x = 10;
const color = x > 10 ? 'red': 'blue';
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is neither blue nor red');
}
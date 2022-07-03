let temp = 30;
let convUnit = 'K'
console.log(convertTemp(temp, convUnit));
function convertTemp(temp, convUnit){
  if(convUnit == 'C')
  return temp - 273;
  else{
    return temp + 273;
  }
}

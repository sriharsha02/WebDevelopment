async function dadMakesPromise(){
  const dadPromise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      let salaryCredited = true;
      let salary = 35000;
      let costOfPS4 = 40000;
      let costOfPS5 = 50000;
      if(salaryCredited === true && salary > costOfPS5){
        resolve('Buy a PS5');
      }else if(salaryCredited === true && salary > costOfPS4 ){
        resolve('Buy a PS4');
      }else{
        reject('Will try next month');
      }
    }, 1000)
  })
  console.log(dadPromise);

}
dadMakesPromise();
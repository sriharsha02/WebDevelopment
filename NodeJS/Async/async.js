async function f() {
  console.log('a');
  console.log('b');
  let promise = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('c'), 0);
    setTimeout(() => resolve('d'), 1000 );
    setTimeout(() => resolve('e'), 0);

  })
  let result = await promise;
  return result;
}
f();

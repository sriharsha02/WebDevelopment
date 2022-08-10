console.log('a');
console.log('b');
function d(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('d');
    }, 1000)
  })
}
function e(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('e');
    }, 1000)
  })
}
function print(){
  Promise.all([
    (async () => console.log(await d()))(),
    (async () => console.log(await e()))(),
  ])
}
console.log('c');
print();
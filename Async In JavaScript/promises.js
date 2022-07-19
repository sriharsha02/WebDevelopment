const posts = [
  {title : 'Post One', body: 'This is post one'},
  {title : 'Post Two', body: 'This is post two'}
];
function getPosts(){
  setTimeout(() => {
    let output = '';
    for(let i = 0; i < posts.length; i++) {
      output += `<li>${posts[i].title}</li>`
    }
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post){
  return new Promise((resolve, reject) =>{
   setTimeout(() => {
     posts.push(post);
     const error = false;
     if(!error){
       resolve();
     }
     else{
       reject('Error: Something went wrong');
     }
   }, 2000);
   });
}

function deletePost(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(posts.values !== 0){
        resolve(posts.pop());
      }
      else{
        reject('Array is empty now');
      }
    }, 1000);
  });
}

createPost({title : 'Post Three', body: 'This is post three'})
.then(() => {
  getPosts();
  deletePost().then(() => {
    getPosts();
  }).catch(err => console.log(err))
  deletePost().then(() => {
    getPosts();
  }).catch(err => console.log(err))
  deletePost().then(() => {
    getPosts();
  }).catch(err => console.log(err))
}).catch(err => console.log(err));

const user = {
  lastActivityTime : ''
}

function updateLastUserActivityTime(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().getTime();
      resolve(user.lastActivityTime)
    }, 1000);


  })
}
//Using promise.all

Promise.all([createPost, updateLastUserActivityTime]).then(([creatPostResolves, updateLastUserActivityTimeResolves]) => {
  console.log(updateLastUserActivityTimeResolves)
}).catch(err => console.log(err));





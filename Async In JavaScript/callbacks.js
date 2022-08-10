const posts = [
  {title : 'Post One', body: 'This is post one', createdAt : new Date().getTime()},
  {title : 'Post Two', body: 'This is post two', createdAt : new Date().getTime()}
];
let intervalId = 0;
function getPosts(){
  clearInterval(intervalId);
  const timerId = setInterval(() => {
    let output = '';
    for(let i = 0; i < posts.length; i++) {
      output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000  } seconds ago</li>`
    }
    document.body.innerHTML = output;
  }, 1000);
  }
function createPost(post, callback){
  setTimeout(() => {
    posts.push({...post, createdAt : new Date().getTime()});
    callback();
  }, 2000);
}
function createFourthPost(post, callback){
  setTimeout(() => {
    posts.push({...post , createdAt : new Date().getTime()});
    callback();
  }, 3000);
}
createPost({title : 'Post Three', body : 'This is post three'}, getPosts)
createFourthPost({title : 'Post Four', body : 'This is post four'}, getPosts);

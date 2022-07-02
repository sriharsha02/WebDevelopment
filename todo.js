const todos = [
  {
    id : 1,
    text : 'online appointment',
    isCompleted : true
    },
    {
    id : 2,
    text : 'attend the meeting',
    isCompleted : true
    },
    {
    id : 3,
    text : 'go to grocery store',
    isCompleted : false
    }
]
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

for(let todo of todos){
  console.log(todo.text)
}

const todoId = todos.map(function(todo){
  return todo.id;
})
console.log(todoId);




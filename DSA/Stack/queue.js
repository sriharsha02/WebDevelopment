class Queue{
  constructor(){
    this.items = [];
  }
  enqueue(element){
    this.items.push(element);
  }
  dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
  front(){
    if(this.isEmpty()){
      console.log('No elements in the queue');
    }
    return this.items[0];
  }
  isEmpty(){
    return this.items.length == 0;
  }
  print(){
    var str = '';
    for(let i = 0; i < this.items.length; i++){
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.print());
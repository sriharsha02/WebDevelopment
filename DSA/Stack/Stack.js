class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
  }
  push(element){
    this.items[this.count] = element;
    console.log(`${element} inserted at ${this.count}`);
    this.count++;
    return this.count - 1;
  }
  pop(){
    if(this.count === 0){
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
  peek(){
    console.log(`top item is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
stack.pop();
stack.peek();

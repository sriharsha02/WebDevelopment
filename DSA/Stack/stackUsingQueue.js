class MyStack{
  constructor(){
    this.q1 = [];
    this.q2 = [];
  }
  push(element){
    if(this.q1.length > 0){
      this.q1.push(element);
    }
    else{
      this.q2.push(element);
    }
  }
  pop(){
    if(this.q1.length === 0 && this.q2.length === 0){
      return null;
    }
    if(this.q1.length > 0){
      while(this.q1.length > 1){
        let element = this.q1.shift();
        this.q2.push(element);
      }
      return this.q1.shift();
    }
    else{
      while(this.q2.length > 1){
        let element = this.q2.shift();
        this.q1.push(element);
      }
      return this.q2.shift();
    }
  }
  top() {
    if(this.q1.length === 0 && this.q2.length === 0)
      return null;

    if(this.q1.length > 0) {
      var elem = this.pop();
      this.q2.push(elem);
      return elem;
    } else {
      var elem = this.pop();
      this.q1.push(elem);
      return elem;
    }
  };

  empty() {
    return this.q1.length == 0 && this.q2.length === 0;
  };
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.top());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.top());


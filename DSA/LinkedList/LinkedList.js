class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  insertFirst(data){
    const node = new Node(data);
    if(this.isEmpty()){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  insertLast(data){
    const node = new Node(data);
   
    if(this.isEmpty()){
      this.head = node;
    }else{
      let prev = this.head;
      while(prev.next){
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insertAtIndex(data, index){
    if(index < 0 || index > this.size){
      return;
    }
    if(index === 0){
      this.insertFirst(data);
    }
    else{
      const node = new Node(data);
      let prev = this.head;
      for(let i = 0; i < index - 1; i++){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index){
    if(index < 0 || index > this.size){
      return null;
    }
    let removedNode;
    if(index === 0){
      removedNode = this.head;
      this.head = this.head.next;
    }else{
      let prev = this.head;
      for(let i = 0; i < index - 1; i++){
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.data;
  }
  search(data){
    if(this.isEmpty()){
      return -1;
    }
    else{
      let i = 0;
      let curr = this.head;
      while(curr){
        if(curr.data === data){
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  }
  reverse(){
    let prev = null;
    let curr = this.head;
    while(curr){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }
  printListData(){
    if(this.isEmpty()){
      console.log('list is empty');
    }
    let curr = this.head;
    let listData = '';
      while(curr){
        listData += `${curr.data} `;
        curr = curr.next;
      }
      console.log(listData);
  }
}
const list = new LinkedList();

list.insertAtIndex(10, 0);
list.printListData();
list.insertAtIndex(20, 0);
list.printListData();
list.insertAtIndex(30, 1);
list.printListData();
list.insertAtIndex(40, 2);
list.printListData();
console.log(list.search(40));
list.reverse();
list.printListData();




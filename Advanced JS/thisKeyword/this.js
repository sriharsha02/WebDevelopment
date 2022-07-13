//this in global scope
this.table = 'window table';
console.log(table);
this.garage = {
  table : 'garage table'
};
console.log(this.garage.table);
//this inside an object

let harshaRoom = {
  table : 'harsha Table'
};
console.log(harshaRoom.table);

//this inside a method

let room = {
  table : 'the table in a room',
  cleanTable(){
    console.log(`cleaning  ${this.table} `);
  }
}
room.cleanTable();

this.garage2 = {
  table : 'the table in garage 2',
  cleanTable(){
    console.log(`cleaning  ${this.table} `);
  }
}
this.garage2.cleanTable();

//this inside a function

this.table2 = 'second table in global space';
const cleanTable = function(soap){
  console.log(`${this.table} is cleaned with ${soap}`);
}
cleanTable.call(this, 'some soap');

//this inside an inner function

const cleanTable2 = function(soap2){
  const innerFunction = (_soap) => {
    console.log(`${this.table} is cleaned with ${soap2}`); //table refers to window table which is in global scope
  }
  innerFunction(soap2);
}
//this inside a class
class createRoom{
  constructor(name){
    this.table = `${name}'s table`;
  }
  cleanTable3(soap3){
    console.log(`cleaning ${this.table} using ${soap3}`);
  }
}
const room1 = new createRoom('harsha');
const room2 = new createRoom('sri');
room1.cleanTable3('best soap');
room2.cleanTable3('good soap');

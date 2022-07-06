// //Examine the document object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// document.title = 123;
// console.log(document.forms);
// console.log(document.all);

// // Get Element By ID
// var headerTitle = document.getElementById("header-title");
// // console.log(headerTitle.innerText);
// // console.log(headerTitle.textContent);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// //border to the title
// headerTitle.style.border = 'solid 3px #000';
// var header = document.getElementById("main-header");
// header.style.borderBottom = 'solid 3px #000'

// var addItem = document.getElementById('add-items');
// addItem.style.fontWeight = 'bold';
// addItem.style.color = 'green';

// //get elements by class name

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello';
// items[2].style.backgroundColor = 'green';


// // items[0].style.fontWeight = 'bold';
// // items[1].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';
// // Instead of doing as above we can loop through the HTML collection

// for(var i = 0; i < items.length; i++){
//   items[i].style.fontWeight = 'bold';
// }
// // styling a newly added li element by class name and tag name
// var li = document.getElementsByClassName('extra-item');
// var list = document.getElementsByTagName('li');
// //styling the newly created item by tagname
// list[4].style.fontWeight = "bold";
// list[4].textContent = "newItem";
// //styling the newly created item by classname
//  li[4].style.border = "red"; //Gives error


//QUERY SELECTOR//

// var header = document.querySelector('#main-header');
// header.style.boderBottom = 'solid 3px #ccc';
// var input = document.querySelector('input');
// input.value = "Hello World";

// var item = document.querySelector(".list-group-item");
// item.style.color = 'red';

// //making second item green in color
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = 'green';
// //making third item invisible
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = 'hidden';

// var items = document.querySelectorAll(".list-group-item:nth-child(2)");
// // items.style.color = "blue"; Gives error as query selector is not used with single element

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = 'green';
// }

// Traversing DOM
var itemList = document.querySelector("#items");

//Parent Node
console.log(itemList.parentNode);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//child Nodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChilde
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//LastChild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello Last';

//nextSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previous Sibling

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

//create Element
var newDiv = document.createElement('div');

//Add class
newDiv.className = "hello";

//Add Id
newDiv.id = 'hello1';
console.log(newDiv);

//Add Attribute
newDiv.setAttribute('title', 'Hello Div');

//Add text node

var newDivText = document.createTextNode('Hello Text');

//append text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

//creating a new list item
var newItem = document.createElement('li');
//creating a text node
var newItemText = document.createTextNode("Hello World");
//appending the text to the list
newItem.appendChild(newItemText);

var list = document.getElementById('items');
//inserting before the first list item
list.insertBefore(newItem, list.children[0]);





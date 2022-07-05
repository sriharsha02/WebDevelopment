//Examine the document object
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
document.title = 123;
console.log(document.forms);
console.log(document.all);

// Get Element By ID
var headerTitle = document.getElementById("header-title");
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//border to the title
headerTitle.style.border = 'solid 3px #000';
var header = document.getElementById("main-header");
header.style.borderBottom = 'solid 3px #000'

var addItem = document.getElementById('add-items');
addItem.style.fontWeight = 'bold';
addItem.style.color = 'green';
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var filterDes = document.getElementTag('p');
//form submit event
form.addEventListener('submit', addItem);

//delete item
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
//filter event for description
filter.addEventListener('keyup',filterDes);
//Add Item;
function addItem(e){
  e.preventDefault();

  //getting the input value
  var newItem = document.getElementById("item").value;
  
  //creating a new item
  var li = document.createElement('li');

  //adding class name
  li.className = "list-group-item";

  //creating text node
  li.appendChild(document.createTextNode(newItem))
  itemList.appendChild(li);
  //create delete button element

  var deleteButton = document.createElement("button");
  //adding class
  deleteButton.className = "btn btn-danger btn-sm float-right delete"

  //text node
  deleteButton.appendChild(document.createTextNode('X'));
  //append button to li
  li.appendChild(deleteButton);
  //append li to itemList
  itemList.appendChild(li);


  //adding edit button next to the delete  icon
  var editButton = document.createElement("button");
  //adding class name
  editButton.className = "btn btn-danger btn-sm float-right delete"
  //append button to li
  li.appendChild(editButton);
  //append li to item list
  itemList.appendChild(li);



}

//funtion to remove item from the list

function removeItem(e){
  if(e.target.classList.contains("delete")){
    if(confirm('Are you Sure ? ')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter function

function filterItems(e){
  //convert to lower case
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  //convert collection to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }

  });
}
//filter function for description
function filterDes(e){
  //convert to lower case
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('p');
  Array.from(items).forEach(function(item){
    var des = item.firstChild.textContent;
    if(des.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }

  });
}



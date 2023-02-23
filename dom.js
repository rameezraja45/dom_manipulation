var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  // create edit button
  var editBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // add class to edit button
  editBtn.className = "btn btn-sm float-right Edit ";
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // append text node
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append button to li
  li.appendChild(deleteBtn);
  li.prepend(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// edit button for item 1
let a=document.getElementsByTagName("li")[0]

let editBtn1 = document.createElement('button');
editBtn1.className = 'btn  btn-sm float-right Edit';
editBtn1.appendChild(document.createTextNode('Edit'));
a.prepend(editBtn1);

// edit button for item 2
let b=document.getElementsByTagName("li")[1]

let editBtn2 = document.createElement('button');
editBtn2.className = 'btn  btn-sm float-right Edit';
editBtn2.appendChild(document.createTextNode('Edit'));
b.prepend(editBtn2);

// edit button for item 3
let c=document.getElementsByTagName("li")[2]

let editBtn3 = document.createElement('button');
editBtn3.className = 'btn  btn-sm float-right Edit';
editBtn3.appendChild(document.createTextNode('Edit'));
c.prepend(editBtn3);

// edit button for item 4
let d=document.getElementsByTagName("li")[3]

let editBtn4 = document.createElement('button');
editBtn4.className = 'btn  btn-sm float-right Edit';
editBtn4.appendChild(document.createTextNode('Edit'));
d.prepend(editBtn4);
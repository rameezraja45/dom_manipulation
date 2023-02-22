var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form Submit Event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener('click', removeItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  // add class
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));


  // create del button element
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  // add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-sm float-right Edit ";

  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("Edit"));

  // append delete button to li
  li.appendChild(deleteBtn);
  li.prepend(editBtn);

  // append li to list
  itemList.appendChild(li);
 
}

// remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure Buddy?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
    
  }
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
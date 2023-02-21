// EXAMIN THE DOCUMENT OBJECT//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = "Experimenting DOM";
//console.log(document.forms);
//console.log(document.links);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(header);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Hello Buddy";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello Guys!</h3>';
//header.style.borderBottom = 'solid 5px #000';


//GETELEMENTBYCLASSNAME//
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items.style.fontWeight = 'bold';
//items[0].style.backgroundColor = 'green';


// for(var i=0; i<items.length; i++){
//       items[i].style.backgroundColor = '#f4f4f4';
//       items[2].style.backgroundColor = 'green';
//       items[i].style.fontWeight = 'bold';
//   }
// var ttl = document.getElementsByClassName('title');
// ttl[0].style.fontWeight = 'bold';
// ttl[0].style.color = 'green';

//GETELEMENTBYTAGNAME//
//works same as getelementbyclassname//

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li.style.fontWeight = 'bold';
//li[0].style.backgroundColor = 'green';


// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
//        li[2].style.backgroundColor = 'green';
//        li[i].style.fontWeight = 'bold';
//    }
// var ttl = document.getElementsByTagName('li');
//  ttl[0].style.fontWeight = 'bold';
//  ttl[0].style.color = 'green';


//QUERYSELECTOR//

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #000';

var input = document.querySelector('input');
input.value = 'Hello World..';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//QUERY SELECTOR ALL//

var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'HURREEHHH';

// var li = document.querySelectorAll('li:nth-child(2)');
// li.style.color = 'yellow';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
    odd[1].style.color = 'yellow';
    even[i].style.backgroundColor = '#ccc';
    even[0].style.color = 'green';
}


// TRAVERSING DOM //

var itemList = document.querySelector('#items');
// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'pink';

// firstChild
//console.log(itemList.firstChild);
// firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello';

// lastChild
//console.log(itemList.lastChild);
// lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello';


// nextSibling
//console.log(itemList.nextSibling);
// nextElementSibling
//console.log(itemList.nextElementSibling);

// previousSibiling
//console.log(itemList.previousSibling);
// previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'red';


// createElement

// create a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
// add id
newDiv.id = 'hello1';
// add attribute
newDiv.setAttribute('title', 'Hello Div');
// create text node
var newDivText = document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
//console.log(newDiv);
newDiv.style.fontSize = '50px';
newDiv.style.fontWeight = 'bold';
container.insertBefore(newDiv,h1);

// adding a list item to page
// var newLi = document.createElement('li');
// newLi.className = 'list-group-item';
// var newLiText = document.createTextNode('Item 0');
// newLi.appendChild(newLiText);

var listGroup = document.getElementById('items');
//console.log(listGroup.innerHTML);
listGroup.innerHTML = '<li class="list-group-item">Item 0</li>' + listGroup.innerHTML;
//var l0 = document.querySelector('li l0');
// console.log(listGroup);
//listGroup.insertBefore(newLi, l0);
//console.log(listGroup.innerHTML);

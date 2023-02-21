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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';


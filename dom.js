// EXAMIN THE DOCUMENT OBJECT//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
document.title = "Experimenting DOM";
//console.log(document.forms);
//console.log(document.links);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Hello Buddy";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello Guys!</h3>';
header.style.borderBottom = 'solid 5px #000';


//GETELEMENTBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';


 for(var i=0; i<items.length; i++){
     items[i].style.backgroundColor = '#f4f4f4';
 }
var ttl = document.getElementsByClassName('title');
ttl[1].style.fontWeight = 'bold';
ttl[1].style.color = 'green';

//GETELEMENTBYTAGNAME//
//works same as getelementbyclassname//

//create a element
const newsheading = document.createElement('h2');
console.log(newsheading);

newsheading.id = 'task-title';
newsheading.appendChild(document.createTextNode('TASK list'));

//get old heading to be replaced 
const oldhead = document.getElementById('task-title');
//get parent element
const cardaction = document.querySelector('.card-action');
//replace
cardaction.replaceChild(newsheading, oldhead);

//removing element
const lis = document.querySelectorAll('li');
const list =document.querySelector('ul');
lis[0].remove();
list.removeChild(lis[3]);

//classes and attribute
const firstli = document.querySelector('li:first-child');
console.log(firstli.children[0]);
const link = firstli.children[0];
let val;
val = link.className;

console.log(val);
val = link.classList;
console.log(val);
//adding a class to already selected element
//classname returns the name of the class in the form of a string while class list returns in the form of an array

link.classList.add('testclass');
val = link;
console.log(val);
link.classList.remove('testclass');
val= link;
console.log(val);

//attributes
val = link.getAttribute('href');
console.log(val);
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
console.log(val);
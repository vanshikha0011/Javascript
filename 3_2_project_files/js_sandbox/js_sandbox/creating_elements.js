//creating element
const li = document.createElement('li');
console.log(li);
li.className ='collection-item';
li.id = 'newitem';
console.log(li);
li.setAttribute('title', 'newitem');
console.log(li);

//create textnode and append
li.appendChild(document.createTextNode('hello world'));
console.log(li);
document.querySelector('ul.collection').appendChild(li);

//create new link element
const link =document.createElement('a');
link.className ='delete-item secondary-content';
link.innerHTML = `<i class="fa fa-remove"></i>`;
li.appendChild(link);
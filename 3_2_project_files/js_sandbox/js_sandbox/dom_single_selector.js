//allows to pull things from the dom
//stores one thing and grab single class, id element


console.log(document.getElementById('task-title'));
//it returns the element with the given id 

console.log(document.getElementById('task-title').id);
//returns the id of the element which was selected

document.getElementById('task-title').style.background ='red';
//changing the styling props using js

document.getElementById('task-title').style.color = 'white';

// document.getElementById('task-title').style.display = 'none';
//will hide the selected element

const tasktitle = document.getElementById('task-title');
//change the content
tasktitle.textContent = 'Task list is as follows';
tasktitle.innerText = 'My tasks';
//text content gets the content of all the pertaining elements, innertext gets only human readable text and make changes to it

document.getElementById('task-title').innerHTML = '<span style: "color =red"> This is a list </span>';
//makes an html element using span

console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = 'red';
//only changes the styling props of the first element

document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
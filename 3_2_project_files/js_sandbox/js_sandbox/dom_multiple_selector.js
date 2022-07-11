const items = document.getElementsByClassName('collection-item');
console.log(items);

//styling the elements this way
items[0].style.color = 'red';

const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listitems);
//this way we can select elements which are included inside ul only, there might be othe elements with the same class name

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].textContent = 'Hey there';    
lis[2].style.color = 'green';

//converting html collection into an array
lis = Array.from(lis);
lis.reverse();
console.log(lis);
lis.forEach(function(li, index){
    li.textContent = `${index}  : 'Hello there dude`;
});


//query selector all = returns our obj as a node list, count items like text between and we can use for each without changing it into an array
const newitem = document.querySelectorAll('ul.collection li.collection-item');
console.log(newitem);
newitem.forEach(function(item, index){
    console.log(item);
    item.textContent =` ${index} : again changed`;
})


//selecting odd and even elements using query selector all
const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach(function(li){
    li.style.background = 'grey';
})

for(let i=0; i<lieven.length ; i++){
    lieven[i].style.background = '#f4f4f4' ;
}

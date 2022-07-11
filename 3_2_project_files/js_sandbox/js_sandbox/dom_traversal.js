let val;
const list = document.querySelector('ul');
const listitem = document.querySelector('li.collection-item');
//will select the first one
val = listitem;
console.log(val);

val = list;
console.log(val);

val = list.childNodes;
console.log(val);
//textnode will be counted if there is a line break between two child nodes, node list will be returned

val = list.children;
console.log(val);
//returns a html collection, childnodes return a node list 

val = list.childNodes[0].nodeName;
console.log(val);

val = list.childNodes[3].nodeType;
console.log(val);
//1 = element , 2= attribute,  3= textnode, 8=comment, 9= document itself, 10= doctype

val = list.children[0];
console.log(val);

list.children[1].textContent = 'buddy';
//getting children of children

val = list.children[3].children;
console.log(val);
//returns the link assosciated with 3rd item

val = list.firstChild;
console.log(val);
val = list.firstElementChild;
console.log(val);
//firstchild returns the node while firstelementchild returns the exact element, same goes for lastchild and lastelementchild


val = list.lastChild;
console.log(val);

val =list.childElementCount;
console.log(val);
//number of children of ul returned, 5 in this case

//PARENT NODES
val = listitem.parentNode;
console.log(val);
val = listitem.parentElement.parentElement;
console.log(val);

//SIBLINGS
val = listitem.nextSibling;
console.log(val);
val = listitem.nextElementSibling;
console.log(val);
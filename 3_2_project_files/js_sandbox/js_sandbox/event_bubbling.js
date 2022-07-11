//bubbling up of events through dom, i.e. reaches for its parent event, delegation means add an event then go for the one which is actually targeted ,move down
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content it is');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card, here it is');
// });
// //above code is just to prove that event bubbling is there inside the card, even if we click on the child element, the parent will be automatically selected
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('the element is col');
// });

//DELEGATION
//used when we need to apply an event listener in case of multiple elements with the same class, else only the first one will get fired, eg
// const delitem = document.querySelector('.delete-item');
// delitem.addEventListener('click', deleteitem);
// function deleteitem(){
//     console.log('item deleted');
// }
// this code wont work for other than first del item tag

//USING DELEGATION
document.body.addEventListener('click', deleteitem);
function deleteitem(e){
    // console.log(e.target);
    // if(e.target.className === 'fa fa-remove'){
    // console.log('item deleted');
    // }
    
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('item deleted');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('deleted');
        //adding the delete functionality
        e.target.parentElement.parentElement.remove();
    }
}
//classname looks at the entire string inside the class attribute, 
const clrbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clrbtn.addEventListener('click', runevent);
clrbtn.addEventListener('dblclick', runevent);
clrbtn.addEventListener('mousedown', runevent);
//when we click and hold for sometime, called mousedown
card.addEventListener('mouseenter', runevent);
card.addEventListener('mouseup', runevent);
//even if hovering inside the card, mouseenter will fire
//mouseleave, mouseup
card.addEventListener('mouseover', runevent);
card.addEventListener('mouseleave', runevent);
//mouseover is when we enter an element inside the main box, card in this case, mouseenter means entering the card itself, mouseleave = opp of mouseenter, leaving a particular element , will fire

card.addEventListener('mousemove', runevent);
//if any mouse movement is there inside the card, the event will fire

function runevent(e){
    console.log(`events type ${e.type}`)
    e.preventDefault();
    heading.innerText = `MouseX is ${e.offsetX}, Mouse Y is ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

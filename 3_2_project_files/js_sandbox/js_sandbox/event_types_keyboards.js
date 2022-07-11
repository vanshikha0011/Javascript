const form = document.querySelector('form');
const taskinput = document.getElementById('task');
const heading = document.querySelector('h5');

taskinput.value = '';
//clears the form every time page reloaded

// form.addEventListener('submit', runevent);
// function runevent (e){
//     console.log(`event type ${e.type}`);
//     console.log(taskinput.value);
//     //the above line gets the value of input submitted

//     e.preventDefault();
// }

taskinput.addEventListener('keydown', runevent);
//fires when key actually goes down, just like mousedown

function runevent(e){
    console.log(`event type ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;
}

taskinput.addEventListener('keyup', runevent);

taskinput.addEventListener('focus', runevent);
//when we click inside the input element, it comes into our focus
//blur is opposite of focus, i.e. when we click outside an event, it gets blur
taskinput.addEventListener('blur', runevent); 

taskinput.addEventListener('cut', runevent);
//fires off when we cut the selected text inside the input

taskinput.addEventListener('input', runevent);
//anything that tampers with an input will fire off using this event listener

const select = document.querySelector('select');
select.addEventListener('change', runevent);

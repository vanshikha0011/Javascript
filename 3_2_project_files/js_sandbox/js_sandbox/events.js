document.querySelector('.clear-tasks').addEventListener('click',function(e){
    console.log('hello world');
    e.preventDefault();
    //page will be redirected but onto the same page only, wont go to google
})

document.querySelector('.clear-tasks').addEventListener('click', onclick);
function onclick(e){
    console.log('clicked');
    let val;
    val = e; 
    console.log(val);

    val = e.target;
    console.log(val);

    val = e.target.className;
    console.log(val);

    e.target.innerText = 'hello';
    //actual text of this button will change after clicking
    
    val = e.type;
    console.log(val);

    val = e.timeStamp;
    console.log(val);

    val = e.clientY;
    console.log(val);
    //returns the number of pixels from the top of page

    val = e.offsetY;
    console.log(val);
    //returns the co-ordinates relative to the element itself
}
//much better way as we add named functions
//also, val = e will give lot of info, target one such eg as it returns the element upon which the event happened



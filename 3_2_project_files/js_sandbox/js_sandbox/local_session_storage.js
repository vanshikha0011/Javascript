//to store or persist the data even if the page is reloaded, key-value pairs are there, what is set as a value has to be a string
//local storage stays until manually cleared, sesssion will end once the browser window and the session is closed
localStorage.setItem('name', 'john');
sessionStorage.setItem('name','beth');


//Removing something from storage
// localStorage.removeItem('name');

//get storage
const name = localStorage.getItem('name');
console.log(name);

localStorage.setItem('age', 30);
const age = localStorage.getItem('age');
console.log(age);

//clear localstorage
localStorage.clear();

//adding a submit event
document.querySelector('form').addEventListener('submit', function(e){
    // console.log(123);
    const task = document.getElementById('task').value;
    // console.log(task);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //json parse is used to convert a string into an object
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task added');
    e.preventDefault();

})
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
})
let val;
val = document;
console.log(val);

val = document.all;
console.log(val);
//returns html collection, that is list of html tags used in the file

val = document.all.length;
console.log(val);

val = document.body;
console.log(val);

val = document.doctype;
console.log(val);

val = document.domain;
console.log(val);

val= document.URL;
console.log(val);

//selecting stuff without using a selector
val = document.forms;
console.log(val);

val = document.forms[0].method;
console.log(val);

val =document.links;
console.log(val);

val = document.links[0].className;
console.log(val);


//SIMILAR OPTIONS ARE AVAILABLE WITH THE FOLLOWING ALSO
val = document.images;
val = document.scripts;
console.log(val);

val = document.scripts[0].getAttribute('src');
console.log(val);

//turning html collection into an array
let scripts = document.scripts;

let scriptsarray = Array.from(scripts);
scriptsarray.forEach(function(script){
    console.log(script);
})
// sanity check
console.log("app.js linked.");

$( document ).ready(function() {
    console.log( "ready!" );
    alert("Welcome to my site")
});
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

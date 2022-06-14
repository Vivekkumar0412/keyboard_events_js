let inp = document.getElementById('inp');
let p = document.getElementById('p');
let p1 = document.getElementById('p');
function keyPress(){
    p.innerHTML =` YOU HAVE PRESSED THE ${event.key}. `;
};

function keyDown(){
    p1.innerHTML = `The key is pressed.`
};

function keyUp(){
    p1.innerHTML = `The key is leaved.`
};
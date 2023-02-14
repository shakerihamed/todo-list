
let inputm = document.querySelector('.input-modal');
let add = document.querySelector("#add");
let mdl = document.querySelector(".modal");
let clos = document.querySelector(".close-btn");
let ul = document.querySelector('ul')
const todoButton = document.querySelector('.sabt-btn');


add.onclick = function() {
    mdl.style.display = 'flex';
    add.style.transform = 'rotate(45deg)';
}

clos.onclick = function () {
    mdl.style.display = "none";
    add.style.transform = 'rotate(0deg)';
}

todoButton.addEventListener('click' , addtodo)

function addtodo(event) {
    event.preventDefault();
    const newli = document.createElement('li');
    newli.innerText = inputm.value;

    ul.appendChild(newli)

    inputm.value = ""
    mdl.style.display = "none";
    add.style.transform = 'rotate(0deg)';

    newli.onclick = function() {
        newli.style.backgroundColor = 'green';
        newli.style.color = '#fff';
    }
}


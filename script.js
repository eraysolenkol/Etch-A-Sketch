const game = document.getElementById('game');
const eraseBtn = document.getElementById('erase');
const penBtn = document.getElementById('pen');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const randomColorBtn = document.getElementById('random-color');
const pixels = document.getElementsByClassName('pixel-box');

var isErase = false; 
let size = 32;
let amount = size * size;
var currentColor = "#000000";

for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.setAttribute('class','pixel-box');
    div.style.width = `${(500 / size)}px`;
    div.style.height = `${(500 / size)}px`;
    div.style.backgroundColor = "#FFFFFF";
    div.addEventListener('mouseover', (e) => {
        if (!isErase)
            div.style.backgroundColor = currentColor;
        else
            div.style.backgroundColor = "#FFFFFF";
    });
    game.appendChild(div);
}


eraseBtn.addEventListener('click', () => {
    isErase = true;
});

penBtn.addEventListener('click', () => {
    isErase = false;
});

colorBtn.addEventListener('input', (event) => {
    currentColor = event.target.value;
});

clearBtn.addEventListener('click', () => {
    for (let i = 0; i < amount; i++) {
        pixels[i].style.backgroundColor = "#FFFFFF";
    }
});

randomColorBtn.addEventListener('click', () => {
    let randomColor = getRandomColor();
    colorBtn.value = randomColor;
    currentColor = randomColor;
});


function getRandomColor() {
    var array = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += array[Math.floor(Math.random() * 16)];
    }
    return color;
}

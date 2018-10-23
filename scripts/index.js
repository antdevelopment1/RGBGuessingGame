// style.backgroundColor doesnot work in Firefox while style.background works in all browsers
let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let pickedColor = pickColor();
let h1 = document.querySelector('h1');
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener('click', function () {
        // Compare color to picked color
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            changeColors(clickedColor, pickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            // Fades incorrect color out to eliminate wrong guesses
            this.style.backgroundColor = 'teal';
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop through all the squares
    for (let i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color; 
    } 
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array 
    let arr = [];
    // add num random colors to arrar
    for (let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



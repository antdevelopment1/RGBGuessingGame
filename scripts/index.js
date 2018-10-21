// style.backgroundColor doesnot work in Firefox while style.background works in all browsers
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener('click', function () {
        // Compare color to picked color
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            changeColors(clickedColor);
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


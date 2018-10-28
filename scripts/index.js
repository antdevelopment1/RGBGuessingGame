// style.backgroundColor doesnot work in Firefox while style.background works in all browsers
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let h1 = document.querySelector('h1');
let colors = generateRandomColors(6);

easyBtn.addEventListener('click', function() {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
})

hardBtn.addEventListener('click', function() {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
})

resetButton.addEventListener('click', function() {

    // generate all new colors
    colors = generateRandomColors(6);

    // Pick new random number from array
    pickedColor = pickColor();

    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // Change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'teal';

})

let pickedColor = pickColor();
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

            resetButton.textContent = 'Play Again';
            
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



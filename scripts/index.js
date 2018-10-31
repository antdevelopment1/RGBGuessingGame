// style.backgroundColor doesnot work in Firefox while style.background works in all browsers
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');
let h1 = document.querySelector('h1');
let numSquares = 6;
let colors = generateRandomColors(numSquares);

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');

        // Or we can write the logic below with a ternary operator like this// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        if (this.textContent === 'Easy') {
            numSquares = 3;
        } else {
            numSquares = 6;
        }

        reset();

        // Firgure out how many squares to show
        // Pick new colors
        // Pick a new pickedColor
        //  Update page to reflect changes
    });
}

function reset() {
    colors = generateRandomColors(numSquares);

    // Pick new random number from array
    pickedColor = pickColor();

    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";

    messageDisplay.textContent = '';

    // Change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }

    }
    h1.style.backgroundColor = 'tan';
}
// easyBtn.addEventListener('click', function() {
//     hardBtn.classList.remove('selected');
//     easyBtn.classList.add('selected');
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//         squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = 'none';
//         }
//     }
//     h1.style.backgroundColor = 'tan';
// })

// hardBtn.addEventListener('click', function() {
//     hardBtn.classList.add('selected');
//     easyBtn.classList.remove('selected');
//     numSquares = 6;
//     colors = generateRandomColors( numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = 'block';
//     }
//     h1.style.backgroundColor = 'tan';
// });

resetButton.addEventListener('click', function() {

   reset();

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

            resetButton.textContent = 'Play Again?';
            
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



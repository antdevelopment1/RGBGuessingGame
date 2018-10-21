let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor;



// style.backgroundColor doesnot work in Firefox while style.background works in all browsers
for (let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener('click', function () {
        // Compare color to picked color
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            console.log('Correct.')
        } else {
            console.log(clickedColor);
            console.log(pickedColor);
            console.log('Wrong');
        }
    })
}


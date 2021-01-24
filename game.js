let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


// Functions
// function nextSequence(params) {
//     let randomNumber = Math.floor(Math.random() * 4);
//     return randomNumber;
// }

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    return randomChosenColor;
}



// Main
let nextButton = nextSequence();

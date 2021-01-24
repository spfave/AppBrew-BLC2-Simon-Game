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

function getButton(color) {
    return $(`#${color}`);

}

function animateButton(color) {
    flashButton(color);
    playButtonSound(color);
}

function flashButton(color) {
    let button = getButton(color);
    button.fadeOut(125);
    button.fadeIn(125);

}

function playButtonSound(color) {
    let buttonSound = new Audio(`sounds/${color}.mp3`);
    buttonSound.play();
}


// Main
let nextButton = nextSequence();
animateButton(nextButton);

// console.log(getButton(nextButton));
// console.log(nextButton);

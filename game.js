let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];


// Functions
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

function clickedButton(button) {
    userPattern.push(button.id);
    console.log(userPattern);
}


// Main
$("div .btn").click(function () {
    clickedButton(this);
})

let nextButton = nextSequence();
animateButton(nextButton);

// console.log(getButton(nextButton));
// console.log(nextButton);

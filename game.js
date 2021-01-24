let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];


// Functions
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    return randomChosenColor;
}

function animateButton(color) {
    let button = $(`#${color}`);
    button.fadeOut(125);
    button.fadeIn(125);

    let buttonSound = new Audio(`sounds/${color}.mp3`);
    buttonSound.play();
}

// Main
$(".btn").click(function () {
    let userSelectedColor = this.id;
    userPattern.push(userSelectedColor);
    console.log(userPattern);
})

let nextButton = nextSequence();
animateButton(nextButton);



// console.log(getButton(nextButton));
// console.log(nextButton);

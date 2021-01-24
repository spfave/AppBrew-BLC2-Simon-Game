let gameStart = false;
let level = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];


// Functions
function updateLevel() {
    level++;
    $("#level-title").text(`Level ${level}`);
}

function nextSequence() {
    updateLevel();
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animateGameButton(randomChosenColor);
    return randomChosenColor;
}

function getButton(color) {
    return $(`#${color}`);
}

function animateGameButton(color) {
    flashButton(color);
    playButtonSound(color);
}

function animateUserButton(color) {
    shadowButton(color);
    playButtonSound(color);
}

function flashButton(color) {
    let button = getButton(color);
    button.fadeOut(125).fadeIn(125);
}

function shadowButton(color) {
    let button = getButton(color);
    button.addClass("pressed");
    setTimeout(function () { button.removeClass("pressed"); }, 125)
}

function playButtonSound(color) {
    let buttonSound = new Audio(`sounds/${color}.mp3`);
    buttonSound.play();
}


// Main
$(".btn").click(function () {
    let userSelectedColor = this.id;
    animateUserButton(userSelectedColor);
    userPattern.push(userSelectedColor);
    // console.log(userPattern);
})


$("body").keypress(function () {
    if (!gameStart) {
        gameStart = true;
        nextSequence();

    }

})

// let nextButton = nextSequence();
// console.log(getButton(nextButton));
// console.log(nextButton);

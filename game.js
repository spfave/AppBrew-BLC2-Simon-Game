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

function nextGameSequence() {
    updateLevel();
    userPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animateGameButton(randomChosenColor);

    // console.log(gamePattern);
}

function checkUserPattern() {
    let sequenceIndex = userPattern.length - 1;
    if (userPattern[sequenceIndex] === gamePattern[sequenceIndex]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(function (params) { nextGameSequence() }, 1000);
        }
    } else {
        gameOver();
        startOver();
    }
}

function gameOver() {
    let body = $("body");
    body.addClass("game-over")
    setTimeout(function () { body.removeClass("game-over"); }, 250)
    let wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();
}

function startOver() {
    $("#level-title").text("Game Over, Press A Key to Restart");
    gameStart = false;
    gamePattern = [];
    level = 0;
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

    checkUserPattern();
})


$("body").keypress(function () {
    if (!gameStart) {
        gameStart = true;
        nextGameSequence();

    }

})

// let nextButton = nextSequence();
// console.log(getButton(nextButton));
// console.log(nextButton);

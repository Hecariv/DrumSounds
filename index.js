let numbersOfDrumButtons = document.querySelectorAll(".drum");
let audio = new Audio();
for (let i = 0; i < numbersOfDrumButtons.length; i++) {
    numbersOfDrumButtons[i].addEventListener("click", function listen() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(letterPressed) {
    switch (letterPressed) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
    }
    audio.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}



// document.querySelectorAll(".drum").forEach(c => c.addEventListener("click", function handleKlick() {
//     alert("I got Clicked");
// }));
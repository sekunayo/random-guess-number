'use strict';
let count = 0;
let input = document.getElementById("number");
let submit = document.getElementById("submit");
let button = document.getElementById("button");
let numberOfGuesses = document.getElementById("previous");
let result = document.getElementById("result");
let display = document.getElementById("display");
let random = Math.floor(Math.random() * 100) + 1;

submit.addEventListener("click", function () {
    GuessNumber();
    clear();
})
function clear(){
    input.value = "";
}
button.addEventListener("click", function () {
    location.reload();
})
input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        GuessNumber();
        clear();
    }
})
function displayMessage(string){
    result.innerHTML = `${string}`;
}
function setStyles(){
    button.classList.remove('hidden');
    display.classList.add('hidden');
}
function GuessNumber() {
    count++;
    let num = Number(input.value);
    numberOfGuesses.classList.remove('hidden');
    numberOfGuesses.innerHTML += " " + input.value;
    if (count > 9) {
        displayMessage(`!!!GAME OVER!!!. The right guess is ${random}. Try your luck next time.`);
        setStyles();
    } else {
        if (num === random) {
            displayMessage("Congratulations! You got it right");
            result.style.backgroundColor = "green";
            setStyles();
        } else if (num !== random) {
            display.innerHTML = num < random ? "Last guess is too low!" : "Last guess is too high!";
            displayMessage("Wrong!");
            result.style.backgroundColor = "Red";
        }
    }
}
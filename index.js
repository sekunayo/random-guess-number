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
})

button.addEventListener("click", function () {
    location.reload();
})
input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        GuessNumber();
        input.value = "";
    }
})

function GuessNumber() {
    count++;
    let num = Number(input.value);
    numberOfGuesses.style.display = "block";
    numberOfGuesses.innerHTML += " " + input.value;
    if (count > 10) {
        result.innerHTML = "!!!GAME OVER!!!";
        button.style.display = "block";
        display.style.display = "none";

    } else {
        if (num === random) {
            result.innerHTML = "Congratulations! You got it right";
            result.style.backgroundColor = "green";
            display.style.display = "none";
            button.style.display = "block";

        } else if (num < random) {
            display.innerHTML = "Last guess is too low!";
            result.innerHTML = "Wrong!";
            result.style.backgroundColor = "Red";
        } else if (num > random) {
            display.innerHTML = "Last guess is too high!";
            result.innerHTML = "Wrong!";
            result.style.backgroundColor = "Red";
        }
    }
}
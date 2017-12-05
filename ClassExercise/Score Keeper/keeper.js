var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1btn.addEventListener("click", function () {
    if (!gameover) {
        p1score++;
        if (p1score === winningscore) {
            p1display.classList.add("winner");
            gameover = true;
        }
        p1display.textContent = p1score;
    }

});

p2btn.addEventListener("click", function () {
    if (!gameover) {
        p2score++;
        if (p2score === winningscore) {
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2score;
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}

numInput.addEventListener("change", function () {
    alert("!");
    winningscoredisplay.textContent = this.value;
    winningscore = Number(this.value);
    reset();
});
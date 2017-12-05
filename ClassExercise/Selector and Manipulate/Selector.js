// change the h1 color
var h1 = document.querySelector("h1");
h1.style.color = "yellow";

//chang the background
var body = document.querySelector("body");
var isBlue = false;

setInterval(function () { //manipulate
    if (isBlue) {
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);

//Exercise
document.URL();
document.head();
document.body();
document.links();

//Methods
document.getElementById();

//
tag.classList.add();
tag.classList.remove();
tag.classList.toggle();
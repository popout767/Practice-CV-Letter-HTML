const button = document.getElementById("clickButton");

let count = 0;

function myFunction() {
    const counter = document.getElementById("counter");
    count++;
    counter.innerText = count;
}


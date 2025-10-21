// Calculator Js

const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Xato !";
    }
}

function clearDisplay() {
    display.value = "";
}
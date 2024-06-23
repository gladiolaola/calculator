function addToDisplay(val) {
    var current = document.getElementById("display").value;
    document.getElementById("display").value = current + val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    var current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    var current = document.getElementById("display").value;
    var result = eval(current);
    document.getElementById("display").value = result;
}
function smile() {
    document.getElementById("display").value = "'◡'";
}

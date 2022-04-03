function insert(num) {
    let number = window.document.getElementById("result").innerHTML;
    window.document.getElementById("result").innerHTML = number + num;
}

function clean() {
    window.document.getElementById("result").innerHTML = "";
}

function back() {
    let result = window.document.getElementById("result").innerHTML;
    window.document.getElementById("result").innerHTML = result.substring(0, result.length - 1)
}

function equal() {
    let number = window.document.getElementById("result").innerHTML;

    if (number) {
        window.document.getElementById("result").innerHTML = eval(number)
    } else {
        window.document.getElementById("result").innerHTML = "Nada para calcular"
    }
}
function clean() {
    document.getElementById('view').value = '';
}

function join(value) {
    document.getElementById('view').value += value;
}

function calculate() {
    var result = 0;
    result = document.getElementById('view').value;
    document.getElementById('view').value = eval(result);
}
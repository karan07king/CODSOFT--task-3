let expression = '';

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    expression = '';
}

function appendSymbol(symbol) {
    if (symbol === '.' && expression.includes('.')) return;
    if (expression === '0' && symbol !== '.') {
        expression = symbol;
    } else {
        expression += symbol;
    }
    document.getElementById('display').innerText = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').innerText = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

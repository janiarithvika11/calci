let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
    console.log('Display Value:', displayValue);  // Debug log
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    document.getElementById('display').value = displayValue;
    console.log('Display Value:', displayValue);  // Debug log
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.trim().slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function appendDot() {
    if (!displayValue.endsWith('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}

function calculateResult() {
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: displayValue }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('display').value = data.result;
        displayValue = data.result;
    })
    .catch(error => console.error('Error:', error));
}

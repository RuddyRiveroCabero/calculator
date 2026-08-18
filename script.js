let firstOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;
let displayValue = '0';

const display = document.getElementById('displayValue');

function updateDisplay() {
    display.textContent = displayValue;
}

function handleNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        if (displayValue.length >= 18) return;
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
}

function handleDecimal() {
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
        return;
    }
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (currentOperator && waitingForSecondOperand) {
        currentOperator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (currentOperator) {
        const result = calculate(firstOperand, inputValue, currentOperator);
        displayValue = String(result).slice(0, 18);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    currentOperator = nextOperator;
}

function calculate(first, second, operator) {
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '*') return first * second;
    if (operator === '/') return second === 0 ? 'ERROR' : first / second;
    return second;
}

function resetCalculator() {
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    currentOperator = null;
}

// Delegación de eventos en la calculadora
document.getElementById('calculator').addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.dataset.number) {
        handleNumber(target.dataset.number);
    } else if (target.dataset.operator) {
        handleOperator(target.dataset.operator);
    } else if (target.dataset.action === 'decimal') {
        handleDecimal();
    } else if (target.dataset.action === 'clear') {
        resetCalculator();
    } else if (target.dataset.action === 'calculate') {
        if (currentOperator && !waitingForSecondOperand) {
            handleOperator(currentOperator);
            currentOperator = null;
        }
    }

    updateDisplay();
});

// Inicializar pantalla
updateDisplay();

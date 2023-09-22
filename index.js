const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.al');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.textContent;
        if (!isFirstValue) {
            getFirstValue(atr);
        }
        if (!isSecondValue) {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = parseFloat(firstValue);
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = parseFloat(secondValue);
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.textContent;
            isFirstValue = true;
        });
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    checkResultLength();
});

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue !== "" && secondValue !== "" && sign !== "") {
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
});

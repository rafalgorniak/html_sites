const defaultValue = 0;
let currentResult = defaultValue;

function createAndWriteOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const numberBefore = currentResult;
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',numberBefore,enteredNumber)
}

function substract() {
    const numberBefore = currentResult;
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult - parseInt(userInput.value);
    createAndWriteOutput('-',numberBefore,enteredNumber)
}

function multiply() {
    const numberBefore = currentResult;
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult * parseInt(userInput.value);
    createAndWriteOutput('*',numberBefore,enteredNumber)
}

function divide() {
    const numberBefore = currentResult;
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult / parseInt(userInput.value);
    createAndWriteOutput('/',numberBefore,enteredNumber)
}

addBtn.addEventListener('click',add);
substractBtnnput.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
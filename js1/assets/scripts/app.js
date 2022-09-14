const defaultValue = 0;
let currentResult = defaultValue;
LOG = [];

//creating method responsible for refreshing and actualizing site data
function createAndWriteOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function inputvalue() {
    if(userInput.value!="") {
        return parseInt(userInput.value);
    }
    return 0;
}

function makelog(operation, prevres, numb, curres) {
    const logEntry = {
        operation: operation,
        prevResult: prevres,
        number: numb,
        result: curres
    };
    LOG.push(logEntry);
    console.log(logEntry);
}

function add() {
    const previousResult = currentResult;
    const enteredNumber = inputvalue();
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',previousResult,enteredNumber);
    makelog('addition',previousResult,enteredNumber,currentResult);
}

function substract() {
    const previousResult = currentResult;
    const enteredNumber = inputvalue()
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',previousResult,enteredNumber);
    makelog('substraction',previousResult,enteredNumber,currentResult);
}

function multiply() {
    const previousResult = currentResult;
    const enteredNumber = inputvalue()
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',previousResult,enteredNumber);
    makelog('multiplying',previousResult,enteredNumber,currentResult);
}


function divide() {
    const previousResult = currentResult;
    const enteredNumber = inputvalue()
    if(enteredNumber!=0) {
        currentResult = currentResult / enteredNumber;
        createAndWriteOutput('/',previousResult,enteredNumber);
        makelog('division',previousResult,enteredNumber,currentResult);
}
} 

addBtn.addEventListener('click',add);
substractBtnnput.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
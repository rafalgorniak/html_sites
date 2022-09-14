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
    const numberBefore = currentResult;
    const enteredNumber = inputvalue();
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',numberBefore,enteredNumber);
    makelog('addition',numberBefore,enteredNumber,currentResult);
}

function substract() {
    const numberBefore = currentResult;
    const enteredNumber = inputvalue()
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',numberBefore,enteredNumber);
    makelog('substraction',numberBefore,enteredNumber,currentResult);
}


function multiply() {
    const numberBefore = currentResult;
    const enteredNumber = inputvalue()
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',numberBefore,enteredNumber);
    makelog('multiplying',numberBefore,enteredNumber,currentResult);
}


function divide() {
    const numberBefore = currentResult;
    const enteredNumber = inputvalue()
    if(enteredNumber!=0) {
        currentResult = currentResult / enteredNumber;
        createAndWriteOutput('/',numberBefore,enteredNumber);
        makelog('division',numberBefore,enteredNumber,currentResult);
}
} 



addBtn.addEventListener('click',add);
substractBtnnput.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
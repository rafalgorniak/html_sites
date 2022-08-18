const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const substractBtnnput = document.getElementById('btn-substract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOuptut = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOuptut.textContent = text;
}
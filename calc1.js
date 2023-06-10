var question = document.getElementById("question");
var result = document.getElementById("result");
var string = "";

var numButtons = document.getElementsByClassName("num");
var operatorButtons = document.getElementsByClassName("operator");
document.getElementById("clear").addEventListener("click", clearAll);

function clearAll(){
    string = "";
    question.textContent = string;
    result.textContent = string;
}

for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", takeInput);
}

for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", takeInput);
}

function takeInput(event) {
    var buttonText = event.target.textContent;
    string += buttonText;
    console.log(string);
    question.textContent = string;
}

document.getElementById("equals").addEventListener("click", displayResult)
const history = document.getElementsByClassName("displayHistory");
var histid = 0;

function displayResult(){
    string = string.replace(/x/g, '*');
    string = string.replace(/÷/g, '/')
    var ans = eval(string);
    result.textContent = ans;
    history[histid].textContent = ans;
    histid++;
    if(histid > 4)
    histid = 0;
}
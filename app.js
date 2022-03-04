// Create functions for basic math operators
let firstNum;
let secondNum;
let answer;
function add(a, b) {
    answer = a + b;
    return answer;
}

function subtract(a, b) {
    answer = a - b;
    return answer;
}

function multiply(a, b) {
    answer = a * b;
    return answer;
}

function divide(a, b) {
    answer = a / b;
    return answer;
}

// Create a function that takes an operator and numbers 
function operate(operator, a, b) {
    if (operator == "add") {
        add(a, b);
    }
    else if (operator == "subtract") {
        subtract(a, b);
    }
    else if (operator == "multiply") {
        multiply(a, b);
    }
    else if (operator == "divide") {
        divide(a, b);
    }
    else {
        alert("ERROR: Please select a digit and an operator.");
    }
}

//Add button click effect
let allButtons = document.querySelectorAll("button");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("mousedown", function () {
        allButtons[i].style.backgroundColor = "#404040"
    })
}
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("mouseup", function () {
        allButtons[i].style.backgroundColor = "#707070"
    })
}


// Make the display value functions  and make the display change
let buttons = document.getElementsByClassName("digits");
let displayValue = "";
let screen = document.getElementById("display");
buttons[0].addEventListener("click", function () {
    displayValue = displayValue + "1";
    screen.textContent = displayValue;
})
buttons[1].addEventListener("click", function () {
    displayValue = displayValue + "2";
    screen.textContent = displayValue;
})
buttons[2].addEventListener("click", function () {
    displayValue = displayValue + "3";
    screen.textContent = displayValue;
})
buttons[3].addEventListener("click", function () {
    displayValue = displayValue + "4";
    screen.textContent = displayValue;
})
buttons[4].addEventListener("click", function () {
    displayValue = displayValue + "5";
    screen.textContent = displayValue;
})
buttons[5].addEventListener("click", function () {
    displayValue = displayValue + "6";
    screen.textContent = displayValue;
})
buttons[6].addEventListener("click", function () {
    displayValue = displayValue + "7";
    screen.textContent = displayValue;
})
buttons[7].addEventListener("click", function () {
    displayValue = displayValue + "8";
    screen.textContent = displayValue;
})
buttons[8].addEventListener("click", function () {
    displayValue = displayValue + "9";
    screen.textContent = displayValue;
})
buttons[9].addEventListener("click", function () {
    displayValue = displayValue + "0";
    screen.textContent = displayValue;
})

// Add Clear button function
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    displayValue = "";
    firstNum = "";
    secondNum = "";
    operatorChosen = "";
    screen.textContent = displayValue;
})

// Add operator button funcionality and save first num chosen
let operators = document.getElementsByClassName("operators");
let operatorChosen = "";
operators[0].addEventListener("click", function () {
    if (operatorChosen == "") {
        operatorChosen = "add";
        firstNum = displayValue;
        displayValue = "";
    }
    else if (operatorChosen !== "") {
        secondNum = displayValue;
        operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
        operatorChosen = "add";
        displayValue = "";
        screen.textContent = answer;
        firstNum = answer;
    }
})
operators[1].addEventListener("click", function () {
    if (operatorChosen == "") {
        operatorChosen = "subtract";
        firstNum = displayValue;
        displayValue = "";
    }
    else if (operatorChosen !== "") {
        secondNum = displayValue;
        operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
        operatorChosen = "subtract";
        displayValue = "";
        screen.textContent = answer;
        firstNum = answer;
    }
})
operators[2].addEventListener("click", function () {
    if (operatorChosen == "") {
        operatorChosen = "multiply";
        firstNum = displayValue;
        displayValue = "";
    }
    else if (operatorChosen !== "") {
        secondNum = displayValue;
        operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
        operatorChosen = "multiply";
        displayValue = "";
        screen.textContent = answer;
        firstNum = answer;
    }
})
operators[3].addEventListener("click", function () {
    if (operatorChosen == "") {
        operatorChosen = "divide";
        firstNum = displayValue;
        displayValue = "";
    }
    else if (operatorChosen !== "") {
        secondNum = displayValue;
        operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
        operatorChosen = "divide";
        displayValue = "";
        screen.textContent = answer;
        firstNum = answer;

    }
})

// Make equals button work (Save second num chosen and run operation)
let equals = document.getElementById("equals");
equals.addEventListener("click", function () {
    secondNum = displayValue;
    let firstParsed = parseFloat(firstNum);
    let secondParsed = parseFloat(secondNum);
    operate(operatorChosen, firstParsed, secondParsed);
    screen.textContent = answer;
    displayValue = "";
})

// Add a Decimal function
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", function () {
    if (displayValue.includes(".")) {
        return;
    }
    else if (displayValue[0]) {
        displayValue = displayValue + ".";
        screen.textContent = displayValue;
    }
    else {
        displayValue = "0";
        displayValue = displayValue + ".";
        screen.textContent = displayValue;
    }
})

// Add a bakspace button function
let backspace = document.getElementById("del");
backspace.addEventListener("click", function () {
    if (displayValue) {
        displayValue = displayValue.slice(0, -1);
        screen.textContent = displayValue;
    }
    else {
        return;
    }
})

// Add button hover effect
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("mouseenter", function () {
        allButtons[i].style.backgroundColor = "#5C5C5C";
    })
    allButtons[i].addEventListener("mouseleave", function () {
        allButtons[i].style.backgroundColor = "#707070";
    })
}

//Add keyboard functionality
document.addEventListener("keydown", (event) => {
    let name = event.key;
    let code = event.code;
    if (name == 1) {
        allButtons[0].style.backgroundColor = "#404040";
        displayValue = displayValue + "1";
        screen.textContent = displayValue;
    }
    else if (name == 2) {
        allButtons[1].style.backgroundColor = "#404040";
        displayValue = displayValue + "2";
        screen.textContent = displayValue;
    }
    else if (name == 3) {
        allButtons[2].style.backgroundColor = "#404040";
        displayValue = displayValue + "3";
        screen.textContent = displayValue;
    }
    else if (name == 4) {
        allButtons[3].style.backgroundColor = "#404040";
        displayValue = displayValue + "4";
        screen.textContent = displayValue;
    }
    else if (name == 5) {
        allButtons[4].style.backgroundColor = "#404040";
        displayValue = displayValue + "5";
        screen.textContent = displayValue;
    }
    else if (name == 6) {
        allButtons[5].style.backgroundColor = "#404040";
        displayValue = displayValue + "6";
        screen.textContent = displayValue;
    }
    else if (name == 7) {
        allButtons[6].style.backgroundColor = "#404040";
        displayValue = displayValue + "7";
        screen.textContent = displayValue;
    }
    else if (name == 8) {
        allButtons[7].style.backgroundColor = "#404040";
        displayValue = displayValue + "8";
        screen.textContent = displayValue;
    }
    else if (name == 9) {
        allButtons[8].style.backgroundColor = "#404040";
        displayValue = displayValue + "9";
        screen.textContent = displayValue;
    }
    else if (name == 0) {
        allButtons[11].style.backgroundColor = "#404040";
        displayValue = displayValue + "0";
        screen.textContent = displayValue;
    }
    else if (name == "+") {
        allButtons[9].style.backgroundColor = "#404040";
        if (operatorChosen == "") {
            operatorChosen = "add";
            firstNum = displayValue;
            displayValue = "";
        }
        else if (operatorChosen !== "") {
            secondNum = displayValue;
            operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
            operatorChosen = "add";
            displayValue = "";
            screen.textContent = answer;
            firstNum = answer;
        }
    }
    else if (name == "-") {
        allButtons[10].style.backgroundColor = "#404040";
        if (operatorChosen == "") {
            operatorChosen = "subtract";
            firstNum = displayValue;
            displayValue = "";
        }
        else if (operatorChosen !== "") {
            secondNum = displayValue;
            operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
            operatorChosen = "subtract";
            displayValue = "";
            screen.textContent = answer;
            firstNum = answer;
        }
    }
    else if (name == "*") {
        allButtons[12].style.backgroundColor = "#404040";
        if (operatorChosen == "") {
            operatorChosen = "multiply";
            firstNum = displayValue;
            displayValue = "";
        }
        else if (operatorChosen !== "") {
            secondNum = displayValue;
            operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
            operatorChosen = "multiply";
            displayValue = "";
            screen.textContent = answer;
            firstNum = answer;
        }
    }
    else if (name == "/") {
        allButtons[13].style.backgroundColor = "#404040";
        if (operatorChosen == "") {
            operatorChosen = "divide";
            firstNum = displayValue;
            displayValue = "";
        }
        else if (operatorChosen !== "") {
            secondNum = displayValue;
            operate(operatorChosen, parseFloat(firstNum), parseFloat(secondNum));
            operatorChosen = "divide";
            displayValue = "";
            screen.textContent = answer;
            firstNum = answer;
        }
    }
    else if (name == "Backspace") {
        allButtons[17].style.backgroundColor = "#404040";
        if (displayValue) {
            displayValue = displayValue.slice(0, -1);
            screen.textContent = displayValue;
        }
        else {
            return;
        }
    }
    else if (name == "Enter") {
        secondNum = displayValue;
        let firstParsed = parseFloat(firstNum);
        let secondParsed = parseFloat(secondNum);
        operate(operatorChosen, firstParsed, secondParsed);
        screen.textContent = answer;
        displayValue = "";
        allButtons[14].style.backgroundColor = "#404040";
    }
    else if (name == ".") {
        allButtons[16].style.backgroundColor = "#404040";

        if (displayValue.includes(".")) {
            return;
        }
        else if (displayValue[0]) {
            displayValue = displayValue + ".";
            screen.textContent = displayValue;
        }
        else {
            displayValue = "0";
            displayValue = displayValue + ".";
            screen.textContent = displayValue;
        }
    }
    else if (name == "c") {
        displayValue = "";
        firstNum = "";
        secondNum = "";
        operatorChosen = "";
        screen.textContent = displayValue;
        allButtons[15].style.backgroundColor = "#404040";
    }
})

// keyup for click effect
document.addEventListener("keyup", (event) => {
    let name = event.key;
    let code = event.code;
    if (name == 1) {
        allButtons[0].style.backgroundColor = "#707070";
    }
    else if (name == 2) {
        allButtons[1].style.backgroundColor = "#707070";
    }
    else if (name == 3) {
        allButtons[2].style.backgroundColor = "#707070";
    }
    else if (name == 4) {
        allButtons[3].style.backgroundColor = "#707070";
    }
    else if (name == 5) {
        allButtons[4].style.backgroundColor = "#707070";
    }
    else if (name == 6) {
        allButtons[5].style.backgroundColor = "#707070";
    }
    else if (name == 7) {
        allButtons[6].style.backgroundColor = "#707070";
    }
    else if (name == 8) {
        allButtons[7].style.backgroundColor = "#707070";
    }
    else if (name == 9) {
        allButtons[8].style.backgroundColor = "#707070";
    }
    else if (name == 0) {
        allButtons[11].style.backgroundColor = "#707070";
    }
    else if (name == "+") {
        allButtons[9].style.backgroundColor = "#707070";
    }
    else if (name == "-") {
        allButtons[10].style.backgroundColor = "#707070";
    }
    else if (name == "*") {
        allButtons[12].style.backgroundColor = "#707070";
    }
    else if (name == "/") {
        allButtons[13].style.backgroundColor = "#707070";
    }
    else if (name == "Backspace") {
        allButtons[17].style.backgroundColor = "#707070";
    }
    else if (name == "Enter") {
        allButtons[14].style.backgroundColor = "#707070";
    }
    else if (name == ".") {
        allButtons[16].style.backgroundColor = "#707070";
    }
    else if (name == "c") {
        allButtons[15].style.backgroundColor = "#707070";
    }
})


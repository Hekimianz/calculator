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
    screen.textContent = displayValue;
})

// Add operator button funcionality and save first num chosen
let operators = document.getElementsByClassName("operators");
let operatorChosen = "";
operators[0].addEventListener("click", function () {
    operatorChosen = "add";
    firstNum = displayValue;
    displayValue = "";
})
operators[1].addEventListener("click", function () {
    operatorChosen = "subtract";
    firstNum = displayValue;
    displayValue = "";
})
operators[2].addEventListener("click", function () {
    operatorChosen = "multiply";
    firstNum = displayValue;
    displayValue = "";
})
operators[3].addEventListener("click", function () {
    operatorChosen = "divide";
    firstNum = displayValue;
    displayValue = "";
})

// Make equals button work (Save second num chosen and run operation)
let equals = document.getElementById("equals");
equals.addEventListener("click", function () {
    secondNum = displayValue;
    operate(operatorChosen, parseInt(firstNum), parseInt(secondNum));
    screen.textContent = answer;
    displayValue = "";
})



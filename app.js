// Create functions for basic math operators
function add(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
}

function subtract(a, b) {
    let sub = a - b;
    console.log(sub);
    return sub;
}

function multiply(a, b) {
    let product = a * b;
    console.log(product);
    return product;
}

function divide(a, b) {
    let division = a / b;
    console.log(division);
    return division;
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
        alert(`${operator}: is not a valid operator.`);
    }
}

operate("divide", 200, 2);




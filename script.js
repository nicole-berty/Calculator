console.log("hello, world!");

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    var answer;
    switch(operator) {
        case "+":
            answer = add(a, b);
            break;
        case "-":
            answer = subtract(a, b);
            break;
        case "*":
            answer = multiply(a, b);
            break;
        case "/":
            answer = divide(a, b);
            break;
    }
    return answer;
}

function display(value) {
    if(document.getElementById("result").value == null || document.getElementById("result").value == 0 
    || document.getElementById("result").value == "" || document.getElementById("result").value == "0"){
        document.getElementById("result").value = value;
    } else if(value == "+" || value == "*" || value == "/" || value == "-") {
        console.log(operate);
    } else {
        document.getElementById("result").value += value;
    }
    
}



console.log(operate("/", 6, 12));
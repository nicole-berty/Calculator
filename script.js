var operand1 = 0;
var operand2 = 0;
var operator = "";

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

function operate(operator, op1, op2) {
    var answer;
    var a = parseFloat(op1);
    var b = parseFloat(op2);
    console.log("IN OPERATE " + op2);
    console.log("op is  " + operator + " a is " + a + " b is " + b);
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
    console.log("BEFORE OP1 " + operand1);
    console.log("OP2 " + operand2);
    console.log("OP " + operator);
    if(document.getElementById("result").value == null || document.getElementById("result").value == 0 
    || document.getElementById("result").value == "" || document.getElementById("result").value == "0"){
        document.getElementById("result").value = value;
    } else if(value == "+" || value == "*" || value == "/" || value == "-") {
        if(operator == "") {
            operator = value;
        }
        if(operand1 == 0) {
            var display = document.getElementById("result").value;
            const pieces = display.split(value);
            operand1 = pieces[0];
          //  console.log("OPERATOR " + operator);
        } else if(operand2 == 0) {
            var display = document.getElementById("result").value;
            const pieces = display.split(value);
            operand2 = pieces[1];
            console.log("pieces  " + pieces[0]);
            document.getElementById("result").value = operate(operator, operand1, operand2)
            reset();
        }
        document.getElementById("result").value += value;
        console.log("1 " + operand1);
        console.log("2 " + operand2);
    } else {
        document.getElementById("result").value += value;
    }
    console.log("AFTER OP1 " + operand1);
    console.log("OP2 " + operand2);
    console.log("OP " + operator);    
}

function clr() {
    document.getElementById("result").value = "0";
    reset(0);
}

function del() {
    let str = document.getElementById("result").value;
    if(str.length > 1) {
        str = str.substring(0, str.length - 1);
        document.getElementById("result").value = str;
    } else if(str.length == 1) {
        document.getElementById("result").value = "0";
    }
}

function reset(value) {
    if(value != null) {
        operand1 = 0; 
    } else {
        operand1 = document.getElementById("result").value;
    }
    operand2 = 0;
    operator = "";
}
function calculate() {
    if(operand2 == 0) {
        var display = document.getElementById("result").value;
        const pieces = display.split(/[^0-9]/);
        operand2 = pieces[1];
        document.getElementById("result").value = operate(operator, operand1, operand2);
        reset();
    } else {
        document.getElementById("result").value = operate(operator, operand1, operand2)
        reset();
    }
}

console.log(operate("/", 6, 12));
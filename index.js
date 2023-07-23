const num1 = +prompt("Enter first number :");
const operation = prompt("Enter math-operation : + , - , * , /");
const num2 = +prompt("Enter second number :");

function calculate() {
    if (isNaN(num1 && num2)) {
        console.log("Something is wrong ! Try again !");
    }
    else{
        switch (operation) {
            case '+' :
                return (num1+num2);
            case '-' :
                return (num1-num2);
            case '*' :
                return (num1*num2);
            case '/' :
                return (num1/num2);
            default:
                return(" The operation is wrong ! ");
        }
    }
}

console.log(calculate());
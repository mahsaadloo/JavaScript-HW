const num1 = +prompt("Enter first Number");
const operation = prompt("Enter math-operation : + or - or * or /");
const num2 = +prompt("Enter second Number");
if (isNaN(num1) || isNaN(num2)) {
    console.log("ERROR ! Please insert number !")
}
else{
    if (operation == "+") {
        console.log(num1+num2);
    }
    else if (operation == "-") {
        console.log(num1-num2);
    }
    else if (operation == "*") {
        console.log(num1*num2);
    }
    else if (operation == "/") {
        console.log(num1/num2);
    }
    else {
        console.log(" Something is wrong ! Try again ! ")
    }
}
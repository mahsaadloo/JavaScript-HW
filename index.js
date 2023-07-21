function calcu(type) {
    const num1 = parseInt(document.getElementById("input1").value);
    const num2 = parseInt(document.getElementById("input2").value);

    if (isNaN(num1 && num2)) {
        document.getElementById('result').innerHTML = "please enter number"
    }else{
        if (type == "add") {
            let result = num1 + num2;
            document.getElementById('result').innerHTML = num1+" + "+num2+" = "+result;
        }
        if (type == "sub") {
            let result = num1 - num2;
            document.getElementById('result').innerHTML = num1+" - "+num2+" = "+result;
        }
        if (type == "multi") {
            let result = num1 * num2;
            document.getElementById('result').innerHTML = num1+" * "+num2+" = "+result;
        }
        if (type == "divi") {
            let result = num1 / num2;
            document.getElementById('result').innerHTML = num1+" / "+num2+" = "+result;
        }
    }

}
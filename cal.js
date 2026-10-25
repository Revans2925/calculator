let currentInput=0;
let firstNumber;
let operator;


function pressNumber(digit) {
    currentInput =currentInput * 10;
    currentInput += digit ;
    console.log(currentInput)
    document.getElementById("result").textContent = currentInput;
}

function pressOperator(op){
    firstNumber = currentInput;
    operator = op;
    currentInput = 0;
    console.log(operator , firstNumber, typeof(firstNumber))



}

function calculate(){

switch (operator){
    case "+":
    return firstNumber + Number(currentInput);

    case "-":
    return firstNumber - Number(currentInput);
    
    case "/":
    return firstNumber / Number(currentInput);

    case "*":
    return firstNumber * Number(currentInput);

    case "%":
    return firstNumber % Number(currentInput);


}
}
document.getElementById("equalto").addEventListener("click",function(){
    document.getElementById("input").value= calculate();

});

function clearCalculator(){  
    
    currentInput = "0";
    firstNumber = undefined;
    operator = undefined;

    document.getElementById("input").value = "0";
    document.getElementById("previous-numbers").value = "";
}


function changeSign(){
    currentInput = String(Number(currentInput)*-1);
    document.getElementById("input").value = currentInput;
    

}




var num1 = 0;
var num2 = 0;
var action = "";

//update page with each click
function calcScreen()
{
    document.getElementById("screen").value = document.getElementById("screen").value + this.value;
}
//shows the buttons
window.onload = function ()
{
    document.getElementById("button1").onclick = calcScreen;
    document.getElementById("button2").onclick = calcScreen;
    document.getElementById("button3").onclick = calcScreen;
    document.getElementById("button4").onclick = calcScreen;
    document.getElementById("button5").onclick = calcScreen;
    document.getElementById("button6").onclick = calcScreen;
    document.getElementById("button7").onclick = calcScreen;
    document.getElementById("button8").onclick = calcScreen;
    document.getElementById("button9").onclick = calcScreen;
    document.getElementById("button0").onclick = calcScreen;

    document.getElementById("buttonAdd").onclick = add;
    document.getElementById("buttonMinus").onclick = subtract;
    document.getElementById("buttonMultiply").onclick = multiply;
    document.getElementById("buttonDivide").onclick = divide;
    document.getElementById("buttonDecrement").onclick = decrement;
    document.getElementById("buttonIncrement").onclick = increment;
    document.getElementById("buttonClear").onclick = clear;
    document.getElementById("buttonEqual").onclick = equal;
}

function add()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    action = "add";
    document.getElementById("screen").value = "";
}

function subtract()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    action = "subtract";
    document.getElementById("screen").value = "";
}

function multiply()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    action = "multiply";
    document.getElementById("screen").value = "";
}

function divide()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    action = "divide";
    document.getElementById("screen").value = "";
}

function decrement()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    num1--;
    document.getElementById("screen").value = num1;
}

function increment()
{
    var number = parseInt(document.getElementById("screen").value);
    num1 = number;
    num1++;
    document.getElementById("screen").value = num1;
}

function clear()
{
    document.getElementById("screen").value = "";
    num1 = 0;
    num2 = 0;
    action = "";
}

//runs the equation
function equal()
{
    var number2 = parseInt(document.getElementById("screen").value);
    if(action == "add")
    {
        num2 = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = num1 + num2;
        document.getElementById("screen").value = result;
    }
    if(action == "subtract")
    {
        num2 = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = num1 - num2;
        document.getElementById("screen").value = result;
    }
    if(action == "multiply")
    {
        num2 = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = num1 * num2;
        document.getElementById("screen").value = result;
    }
    if(action == "divide")
    {
        num2 = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = num1 / num2;
        document.getElementById("screen").value = result;
    }
}
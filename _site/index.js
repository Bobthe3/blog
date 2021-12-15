//simple_calc.html part
let num1 = 3;
let num2 = 3;
let sumEL = document.getElementById("sum-el");

function add(){
    result = num1+ num2 
    sumEL.textContent = result
}

function sub(){
    sumEL.textContent = num1 - num2
}

function div(){
    sumEL.textContent = num1 / num2
}

function mult(){
    sumEL.textContent = num1 * num2
}

let sumEl = document.getElementById("sum-el")

function add() {
    
    sumEl.textContent = "Sum: " + num1 + num2
}

/// todo list code
let click = document.getElementById("in");
let list1 = document.getElementById("list");
let btn = document.getElementById("btn")
btn.addEventListener('click', function addTodo(){
    var paragraph = document.createElement('p')
    list1.appendChild(paragraph)
})
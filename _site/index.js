// //simple_calc.html part
// let num1 = 3;
// let num2 = 3;
// let sumEL = document.getElementById("sum-el");

// function add(){
//     result = num1+ num2 
//     sumEL.textContent = result
// }

// function sub(){
//     sumEL.textContent = num1 - num2
// }

// function div(){
//     sumEL.textContent = num1 / num2
// }

// function mult(){
//     sumEL.textContent = num1 * num2
// }

// let sumEl = document.getElementById("sum-el")

// function add() {
    
//     sumEl.textContent = "Sum: " + num1 + num2
// }

// /// todo list code
// let click = document.getElementById("in");
// let list1 = document.getElementById("list");
// let btn = document.getElementById("btn")
// btn.addEventListener('click', function addTodo(){
//     var paragraph = document.createElement('p')
//     list1.appendChild(paragraph)
// })

// let yourName;
// do {
//     yourName = prompt("Who are you?"); } 
// while (!yourName); console.log(yourName);


// for(let x=0; x<7; x=x+1)
// {
//     for(let y=1; x>=y; y=y+1)
//     {
//         console.log("3")
//     }
// }

function pasuser(form) { 
    if (form.id.value=="ashwin"||form.id.value=="bupin"||form.id.value=="varun"||form.id.value=="ness") { 
        if (form.pass.value=="konda") { location="assets/other/ogga_boga.mp4" } 
        else if(form.pass.value=="varun"){ location="assets/other/shark_video.MOV" } 
        else if(form.pass.value=="bupin"){ location="assets/other/rupin.jpeg" } 
        else if(form.pass.value=="ridge"){ location="assets/other/funnycat.png" } 
        else { alert("Wrong Password") } 
        } 
        else { alert("Wrong Username") } 
    } 
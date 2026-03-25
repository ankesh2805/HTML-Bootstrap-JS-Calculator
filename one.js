let display = document.getElementById("display");
let input=""
function change1(){
    input+="1"
    display.value = input; 
}
function change0(){
    input+="0"
    display.value = input; 
}
function change2(){
    input+="2"
    display.value = input; 
}
function change3(){
    input+="3"
    display.value = input; 
}
function change4(){
    input+="4"
    display.value = input; 
}
function change5(){
    input+="5"
    display.value = input; 
}
function change6(){
    input+="6"
    display.value = input; 
}
function change7(){
    input+="7"
    display.value = input; 
}
function change8(){
    input+="8"
    display.value = input; 
}
function change9(){
    input+="9"
    display.value = input; 
}
function changed(){
    input+="."
    display.value = input; 
}
function operation1(){
    input+="/"
    display.value = input; 
}
function operation2(){
    input+="*"
    display.value = input; 
}
function operation3(){
    input+="-"
    display.value = input; 
}
function operation4(){
    input+="+"
    display.value = input; 
}
function operation5(){
    input=eval(input)
    display.value = input; 
}







// let display = document.getElementById("display");
// let buttons = document.querySelectorAll("button");

// let input = "";   // yahi tumhara main string hai

// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {

//         let value = btn.value;

//         if (value === "=") {
//             input = eval(input);   // calculate
//         } 
//         else {
//             input += value;        // add
//         }

//         display.value = input;     // screen update
//     });
// });

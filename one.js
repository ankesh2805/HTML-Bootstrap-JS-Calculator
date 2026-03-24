let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let input = "";   // yahi tumhara main string hai

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        let value = btn.value;

        if (value === "=") {
            input = eval(input);   // calculate
        } 
        else {
            input += value;        // add
        }

        display.value = input;     // screen update
    });
});

const answer = document.querySelector(".answ");
const clearBtn = document.getElementById("b-clear");
const deleteBtn = document.getElementById("b-delete");
const equalsBtn = document.getElementById("b-equals");

const buttons = document.querySelectorAll(".btn, .btn-op");
let expression = "";

buttons.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        if(btn.id === "b-clear")    return;
        if(btn.id === "b-delete")    return;
        if(btn.id === "b-equals")    return;


        if(btn.id === "b-product")
                expression += "*";
        else{
            expression += btn.textContent;
        }
        answer.textContent = expression;
    });
})

equalsBtn.addEventListener("click", ()=>{
    try{
        expression = eval(expression);
        answer.textContent = expression;
    }
    catch(e){
        answer.textContent = "Error";
        expression = "";
    }
})

clearBtn.addEventListener("click", ()=>{
    expression = "";
    answer.textContent = 0;
})

deleteBtn.addEventListener("click", ()=>{
    expression = expression.slice(0, -1);
    answer.textContent = expression;
})
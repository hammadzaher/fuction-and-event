function submit() {
    let user1 = Number(document.querySelector("#input1").value);
    let user2 = Number(document.querySelector("#input2").value);
    let operator = document.querySelector("#operator").value;
    let container = document.querySelector(".result")
    
    let result;

    if(operator == "plus") {
        result = plus(user1 , user2);
    }else if(operator == "minus") {
        result = minus(user1 , user2);
    }else if(operator == "multiply") {
        result = multiply(user1 , user2);
    }else if(operator == "divided") {
        if(user2 == 0) {
            alert("Cannot divide by zero.");
            return;
        }
        result = divided(user1 , user2);
    }
    container.innerText = result;
}

function plus(a , b) {
    return a + b;
}

function minus(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divided(a , b) {
    return a / b;
}
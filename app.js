const display = document.getElementById('display')
const buttons = document.querySelectorAll('.num-btn')
const delBtn = document.getElementById('del-btn')
const equal = document.getElementById('equals')
let displayValue = ''


buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        display.textContent += e.target.id
        displayValue += e.target.id
        console.log(displayValue)
        console.log(display.textContent)
    })
})
equal.addEventListener('click', function calculate() {
    let opVal = displayValue.split(' ')
        (operate(opVal[1], opVal[0], opVal[2]))

})


//function that uses reduce and calls the function at each itteration. 



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    if (operator === '+') {
        return add(a, b)
    } else if (operator === '-') {
        return subtract(a, b)
    } else if (operator === '*') {
        return multiply(a, b)
    } else if (operator === "/") {
        return divide(a, b)
    }
}

const display = document.getElementById('display')
const buttons = document.querySelectorAll('.num-btn')
const equal = document.getElementById('equals')
const clear = document.getElementById('clear')
const delBtn = document.getElementById('del-btn')
display.style.textAlign = 'right'
let displayValue = ''
console.log(buttons)


console.log(clear)
buttons.forEach(button => {

    button.addEventListener('click', function (e) {
        console.log(e)
        display.textContent += e.target.id
        displayValue += e.target.id
    })
})
equal.addEventListener('click', function calculate() {

    let opVal = displayValue.split(' ')
    console.log(typeof opVal[2])
    if (!opVal[1] || !opVal[2]) {
        return
    } else {
        display.textContent = operate(opVal[1], opVal[0], opVal[2])
        displayValue = operate(opVal[1], opVal[0], opVal[2])
        console.log(display.textContent)
    }
})
clear.addEventListener('click', function () {
    displayValue = ''
    display.textContent = ''
})
// delBtn.addEventListener('click', function () {
//     displayValue = displayValue.slice(0, -1)
//     display.textContent = displayValue = displayValue.slice(0, -1)
//     console.log(displayValue)
// })

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    if (operator === '/' && b === 0) {
        console.log('You cant divide by 0 you donut')
        //} else if () 
        //

    } else {
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
}
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
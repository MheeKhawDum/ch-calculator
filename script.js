const display = document.querySelector("input[name='display']")
const buttons = document.querySelectorAll("input[type='button']")

let lastValue = ''

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value

        if (['+', '-', '*', '/'].includes(value)){
            if(!['+', '-', '*', '/'].includes(lastValue) && display.value != ''){
                display.value += value
                lastValue = value
            }
        } else if(value === '='){
            if(display.value != ''){
                display.value = eval(display.value)
            } else {
                display.value = 'Error'
            }
        } else if(value === 'C'){
            display.value = ''
            lastValue = ''
        } else if (value === '+/-'){
            if(display.value.charAt(0) === '-'){
                display.value = display.value.slice(1)
            } else {
                display.value = '-' + display.value
            }
        } else {
            display.value += value
            lastValue = value
        }
    })
})
let buttons = document.getElementsByTagName('button')
let input = document.getElementById('input')

for (let button of buttons) {

    button.onclick = function () {
        input.value += button.innerText
        if (button.innerText == '=') {
            eval(input.value) 
        }

    }

}
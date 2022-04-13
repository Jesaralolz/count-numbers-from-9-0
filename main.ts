input.onButtonPressed(Button.A, function () {
    basic.showNumber(Number2)
    for (let index = 0; index < 9; index++) {
        Number2 = Number2 - 1
        basic.showNumber(Number2)
    }
})
let Number2 = 0
Number2 = 9

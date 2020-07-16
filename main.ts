input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    X += -1
    if (X < 0) {
        X = 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(X, Y)
    X += 1
    if (X > 4) {
        X = 0
    }
})
let Y = 0
let X = 0
X = 0
Y = 0
let dir = 1
led.plot(X, 0)
basic.forever(function () {
    led.unplot(X, Y)
    Y += dir
    led.plot(X, Y)
    if (Y >= 4) {
        dir = -1
    } else if (Y < 0) {
        dir = 1
    }
})

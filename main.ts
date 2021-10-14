input.onButtonPressed(Button.A, function () {
    basic.showString("can I be your friend?")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})

let moistureReading = 0
input.onButtonPressed(Button.A, function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 10)
    basic.showNumber(Math.round(moistureReading))
    basic.clearScreen()
})
basic.forever(function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 10)
    if (Math.round(moistureReading) < 9) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # . # .
            . # . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (Math.round(moistureReading) < 9 || input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Umbrella)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})

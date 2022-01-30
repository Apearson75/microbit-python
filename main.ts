input.onButtonPressed(Button.A, function () {
    serial.writeLine("A")
    basic.pause(200)
})
input.onGesture(Gesture.TiltLeft, function () {
    serial.writeLine("tilt left")
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("A+B")
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("B")
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    serial.writeLine("shake")
    basic.pause(200)
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeLine("tilt right")
    basic.pause(200)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readString())
    led.plot(0, 0)
})
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_TX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()

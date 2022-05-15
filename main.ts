input.onButtonPressed(Button.A, function on_button_pressed_a() {
    serial.writeLine("A")
    basic.pause(200)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    serial.writeLine("tilt left")
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    serial.writeLine("A+B")
    basic.pause(200)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    serial.writeLine("B")
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    serial.writeLine("shake")
    basic.pause(200)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    serial.writeLine("tilt right")
    basic.pause(200)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function on_data_received() {
    basic.clearScreen()
    let daString = serial.readString()
    basic.showString(daString)
})
serial.redirect(SerialPin.USB_TX, SerialPin.USB_TX, BaudRate.BaudRate115200)
serial.redirectToUSB()

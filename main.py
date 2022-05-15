def on_button_pressed_a():
    serial.write_line("A")
    basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    serial.write_line("tilt left")
    basic.pause(200)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_ab():
    serial.write_line("A+B")
    basic.pause(200)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    serial.write_line("B")
    basic.pause(200)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    serial.write_line("shake")
    basic.pause(200)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    serial.write_line("tilt right")
    basic.pause(200)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_data_received():
    basic.clear_screen()
    daString = serial.read_string()   
    basic.show_string(daString)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

serial.redirect(SerialPin.USB_TX, SerialPin.USB_TX, BaudRate.BAUD_RATE115200)
serial.redirect_to_usb()
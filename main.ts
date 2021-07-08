let a = true
let led_an = false
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (led_an == true) {
            basic.turnRgbLedOff()
            led_an = false
        } else {
            basic.setLedColor(0x550000)
            led_an = true
        }
        
    }
    
    while (input.buttonIsPressed(Button.A)) {
        a = true
    }
}

let led_an = false
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (led_an == true) {
            basic.turnRgbLedOff()
        } else {
            basic.setLedColor(0x550000)
        }
        
        led_an = !led_an
        while (input.buttonIsPressed(Button.A)) {
            
        }
    }
    
    if (input.buttonIsPressed(Button.B)) {
        if (led_an == true) {
            basic.turnRgbLedOff()
        } else {
            basic.setLedColor(0x005500)
        }
        
        led_an = !led_an
        while (input.buttonIsPressed(Button.B)) {
            
        }
    }
    
}

let led_an = false
let bild_an = false
let A = false
let B = false
while (true) {
    if (input.buttonIsPressed(Button.A) && !A) {
        A = true
        if (led_an == true) {
            basic.turnRgbLedOff()
        } else {
            basic.setLedColor(0x550000)
        }
        
        led_an = !led_an
    }
    
    if (!input.buttonIsPressed(Button.A) && A) {
        A = false
    }
    
    if (input.buttonIsPressed(Button.B) && !B) {
        B = true
        if (bild_an == true) {
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Heart)
        }
        
        bild_an = !bild_an
    }
    
    if (!input.buttonIsPressed(Button.B) && B) {
        B = false
    }
    
}

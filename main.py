a=True
led_an=False
while True:
    if input.button_is_pressed(Button.A):
        if led_an==True:
            basic.turn_rgb_led_off()
            led_an=False
        else:
            basic.set_led_color(0x550000)
            led_an=True
    while (input.button_is_pressed(Button.A)):
        a=True
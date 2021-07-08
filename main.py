led_an=False
while True:
    if input.button_is_pressed(Button.A):
        if led_an==True:
            basic.turn_rgb_led_off()
        else:
            basic.set_led_color(0x550000)
        led_an=not(led_an)
        while (input.button_is_pressed(Button.A)):
            pass
    if input.button_is_pressed(Button.B):
        if led_an==True:
            basic.turn_rgb_led_off()
        else:
            basic.set_led_color(0x005500)
        led_an=not(led_an)
        while (input.button_is_pressed(Button.B)):
            pass





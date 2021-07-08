led_an=False
bild_an=False
A=False
B=False
while True:
    if (input.button_is_pressed(Button.A) and not A):
        A=True
        if led_an==True:
            basic.turn_rgb_led_off()
        else:
            basic.set_led_color(0x550000)
        led_an=not(led_an)
    if ((not input.button_is_pressed(Button.A)) and A):
        A=False
    if (input.button_is_pressed(Button.B) and not B):
        B=True
        if bild_an==True:
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.HEART)
        bild_an=not(bild_an)
    if ((not input.button_is_pressed(Button.B)) and B):
        B=False 




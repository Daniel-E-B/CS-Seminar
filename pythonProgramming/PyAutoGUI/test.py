import pyautogui as p
w,h=p.size()
p.moveTo(w/2,h/2)
p.hotkey('command','space')
p.typewrite('pyautogui works!!',interval=0)

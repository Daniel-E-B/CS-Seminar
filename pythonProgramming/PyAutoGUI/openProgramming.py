import pyautogui as p

def enter():
	p.hotkey('enter')

p.hotkey('command','space')
p.typewrite('terminal')
enter()
p.typewrite('cd ~/Documents/programming')
enter()


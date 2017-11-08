from time import sleep
import pyautogui as p

def enter():
        p.hotkey('enter')
def tab():
	p.hotkey('tab')

p.hotkey('command','space')
p.typewrite('chrome')
enter()
p.hotkey('command','t')
p.typewrite('photos.google.com')
enter()
#now that its open, change to my other account:
#but first, wait for the page to finish loading:
sleep(0.05) #50ms should be enough time...right?
for i in range (0,8):
	tab()
enter()
for i in range(0,4):
	tab()
enter()

import pyautogui as p

#p.moveTo(x=500,y=500,duration=3)
p.moveTo(x=500,y=500)

#p.click(button='left',clicks=5)
#p.dragRel(35,0,2,button='left')
img=p.locateCenterOnScreen('findMe.png',grayscale=False)
print (img)
p.moveTo(img)
#p.typewrite("lol")
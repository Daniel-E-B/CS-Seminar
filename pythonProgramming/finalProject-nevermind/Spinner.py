import Tkinter as tk

class Color:
    r=0
    g=0
    b=0
    def __init__(self, r, g, b):
        self.r=r
        self.g=g
        self.b=b

class Theme:
    #colors:
    colors[] #background, hand, foreground
    def __init__(self, background, hand, foreground):
        self.colors.append(background)
        self.colors.append(hand)
        self.colors.append(foreground)
    def getBackground():
        return(colors[0])
    def getHand():
        return(colors[1])
    def getForeground():
        return(colors[2])

class Spinner:
    langs=[]
    size=0
    theme=Theme(Color(0,0,0),Color(0,0,0),Color(0,0,0))
    def __init__(self, size, langs[], theme):
        self.langs=langs
        self.size=size
        self.theme=theme

    def draw():
        numLangs=len(langs)
        for i in range (0,len(langs)):
            
        #make it alternate foreground and background slices

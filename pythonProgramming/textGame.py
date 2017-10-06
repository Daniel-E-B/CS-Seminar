name = raw_input("What is your name? ")

def startGame():
    print("Hello %s!"%(name))
    print("You wake up in a dark room with no memory of how you got there")
    print("Groggily, you open your eyes and you hear something")
    print("What do you do?")
    print("1. Go back to sleep and pretend nothing happened")
    print("2. Hide under the bed and call 911")
    print("3. Prepare for mortal combat")
    choice=raw_input("Please type 1, 2, or 3. ")
    if choice == "1":
        sleep()
    elif choice == "2":
        hide()
    elif choice == "3":
        mortalCombat()
    else:
        print("Please type 1, 2, or 3. ")
        startGame()

def sleep():
    print("You went back to sleep and did not wake up the next morning")
    playAgain()

def hide():
    print("911 didn't pick up, but someone must have heard the phone ring, because the neighbors told you to go back to bed")
    playAgain()

def mortalCombat():
    print("You pick up your pocket knife from next to your bed, and throw it at the door. Your parents won't be happy...")
    print("You go back to bed and survive!")
    print("Congratulations, %s, you win!"%(name))
    playAgain()

def playAgain():
    choice=raw_input("Would you like to play again? (Y/n)")
    if choice=="Y":
        startGame()
    elif choice=="n":
        print("Bye!")
    else:
        print("Please type Y or n")
        playAgain()

startGame()

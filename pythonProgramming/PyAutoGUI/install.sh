echo installing brew

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

echo installing python3

brew install python3

echo installing pyautogui

pip3 install pyobjc-core

pip3 install pyobjc

pip3 install pyautogui

echo running pyautogui test

python3 test.py

echo if that test didn't throw a ton of errors and your mouse moved to the middle of the screen, then you're good

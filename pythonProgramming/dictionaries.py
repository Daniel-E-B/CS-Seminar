#password stuff
passwords = {
    'Daniel':'12345',
    'Luke':'aGoodPassword',
    'Quinn':'password with spaces',
    'Liam':'areallylongpasswordwithnouppercase'
}




#be ambiguous about whether or not they typed the username wrong of the password wrong
def check_password(database, username, password):
    try:
        if database[username]==password:
            print "Logged in"
        else:
            print"Wrong username/password"
    except:
        print "Wrong username/password"

usernameInput=raw_input("Enter username: ")
passwordInput=raw_input("Enter password: ")

check_password(passwords, usernameInput, passwordInput)

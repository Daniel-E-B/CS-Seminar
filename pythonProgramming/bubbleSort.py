print("enter some numbers to sort, type quit when you are done")
numbers=[0]
number=''
while number != 'quit':
    number=raw_input('input: ')
    if number!='quit':
        numbers.append(number)
print('here are the unsorted numbers: ', numbers)
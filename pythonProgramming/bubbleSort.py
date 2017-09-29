from __future__ import print_function
#because python3's print function is far superior

print("enter some numbers to sort, type quit when you are done")
numbers=[]
number=0
while number != 'quit':
    number=raw_input('input: ')
    if number!='quit':
        numbers.append(number)
        #number=ord(number)-97
print("here are the unsorted numbers: ", numbers)

flag=True
for i in range (0, len(numbers)):
    if flag==False:
        break
    flag=False
    for j in range (0, len(numbers)-1):
        if numbers[j+1]<numbers[j]:
            transfer=numbers[j+1]
            numbers[j+1]=numbers[j]
            numbers[j]=transfer
            flag=True

print("here are the sorted numbers: ", numbers)
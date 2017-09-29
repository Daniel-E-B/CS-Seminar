from __future__ import print_function
a=0
first=0
second=1
numbers=[1,1]
print("1, 1,", end=' ')
while (a<10000):
    a=numbers[first]+numbers[second]
    numbers.append(a)
    first+=1
    second+=1
    print(a, end=', ')
    #print(numbers)
    #print(counter-1)
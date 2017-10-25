def sum_recursive(l):
  if len(l)>1:
    l[-2]+=l[-1]#the last element is added to the second last element
    l=l[:-1]#remove the last element
    return sum_recursive(l)

print(sum_recursive([5,4,3,2,3]))

import re
# Shortest Word

def shortest_word(s): 
    # your lovely code here!
    l = list(map(len, s.split(' ')))
    return l, min(l)

# print(shortest_word("I don't think that word means what you think it means"))
# should return: 1
  

# Sum of Minimums

def sum_of_minimums(l):
    # your lovely code goes here!
    li = list(map(min, l))
    return sum(li)

my_list = [
    [1,2,3,4,5], # minimum value of row is 1
    [5,6,7,8,9], # minimum value of row is 5
    [20,21,34,56,100] # minimum value of row is 20
    ]

# print(sum_of_minimums(my_list))
    # should return 26
  
# Split Strings

def split_strings(s):
    # your lovely code goes here
    if len(s) % 2 != 0:
        s += '_'
    return [s[i:i+2] for i in range(0, len(s), 2)]

print(split_strings('abc'))
# should return ['ab', 'c_']

# print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']

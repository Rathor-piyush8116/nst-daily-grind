#Create a function named smart_calculator(a, b) and write your code inside it.
def smart_calculator(a,b):
    if a%2==0 and b%2==0:
        return a+b
    elif  a%2!=0 and b%2!=0:
        return a*b
    else:
        return abs(a - b)
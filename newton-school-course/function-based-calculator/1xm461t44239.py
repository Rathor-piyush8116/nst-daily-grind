// ─── 2 ───
'''
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a // b

def modulo(a, b):
    return a % b
'''

# Your code starts here
a,b = map(int,input().split())
op = input()
if op == "+":
    print(add(a,b))
elif op =="-":
    print(subtract(a,b))
elif op == "*":
    print(multiply(a,b))
elif op == "//":
    print(divide(a,b))
elif op == "%":
    print(modulo(a,b))
else:
    print("Invalid Operator")





// ─── 9 ───
30
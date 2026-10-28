// ─── 2 ───
num1, num2 = map(int,input().split())
num1, num2 = abs(num1),abs(num2)
def gcd(a,b):
    while b:
        a,b = b,a%b
    return a
gcd=gcd(num1,num2)
print(num1*num2//gcd)

// ─── 8 ───
6
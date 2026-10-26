# Your code here
n=int(input())
s=10
while n!=0:
    d=n%10
    if d<s:
        s=d
    n=n//10
 
print(s)
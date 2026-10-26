// ─── 2 ───

n=int(input())
sumE=0
sumO=0
while n!=0:
    nl=n%10
    if nl%2==0:
        sumE+=nl
    else:
        sumO+=nl
    n=n//10
print(sumE,sumO)

// ─── 3 ───
295892
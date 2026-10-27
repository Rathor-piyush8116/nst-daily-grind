// ─── 2 ───
n = int(input())
count = 0
for i in range(1,n+1):
    if n>1 and n%1 == 0 and n%i==0:
        count +=1
if count == 2:
    print("YES")
else:
    print("NO")

// ─── 7 ───
YES
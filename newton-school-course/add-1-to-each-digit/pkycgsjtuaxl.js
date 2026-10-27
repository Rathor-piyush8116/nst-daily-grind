num = int(input())
ans = 0
pos = 1
while num > 0:
    digit = num%10
    digit = (digit+1)%10
    ans = digit * pos +ans
    pos = pos*10
    num = num // 10

print(ans)
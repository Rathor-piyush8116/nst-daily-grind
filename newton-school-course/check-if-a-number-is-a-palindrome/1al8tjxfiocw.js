n = int(input().strip())

original = n
reversed_num = 0

while n > 0:
    reversed_num = reversed_num * 10 + (n % 10)
    n //= 10

if original == reversed_num:
    print("Yes")
else:
    print("No")
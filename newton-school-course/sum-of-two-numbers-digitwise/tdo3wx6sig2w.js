// ─── 23 ───
a, b = map(int, input().split())

sum1 = 0
place = 1
carry = 0

while a > 0 or b > 0 or carry > 0:
    d1 = a % 10
    d2 = b % 10

    s = d1 + d2 + carry
    sum1 += (s % 10) * place
    carry = s // 10

    a = a // 10
    b = b // 10
    place *= 10

print(sum1)
# num1,num2 = map(int,input().split())
# k = 1
# y = 0
# while k:
#     y = num1%10
#     num1 = num1+num2
#     k = k - 1
# print(num1)

// ─── 26 ───
5135
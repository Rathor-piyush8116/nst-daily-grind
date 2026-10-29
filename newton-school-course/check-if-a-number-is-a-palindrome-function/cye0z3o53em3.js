// ─── 2 ───
# TODO: Define a function named 'reverse' that takes an 
# integer and returns the reversed number
rev_num = 0
def reverse(num):
    global rev_num
    while num > 0:
        last_digit = num % 10
        rev_num = rev_num*10+last_digit
        num //= 10

num = int(input())
reverse(num)
if num == rev_num:
    print("Yes")
else:
    print("No")




# TODO: Take input from user and use reverse() function to solve the problem

// ─── 14 ───
Yes
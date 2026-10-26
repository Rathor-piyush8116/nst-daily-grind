# Your code here
num = int(input())
num_copy = num
digit_count = 0
arsum = 0

while num_copy > 0:
    digit_count += 1
    num_copy //= 10

num_copy = num

while num_copy > 0:
    digit = num_copy % 10
    arsum += digit ** digit_count
    num_copy //= 10

if arsum == num:
    print(True)
else:
    print(False)
def sum_of_digits(N):
    total = 0
    while N > 0:
        rem = N%10
        total = total+rem
        N= N//10
    return total
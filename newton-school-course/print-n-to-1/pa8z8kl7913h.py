def print_reverse(n):
    if n < 1:
        return 
    print_reverse(n-1)
    print(n)
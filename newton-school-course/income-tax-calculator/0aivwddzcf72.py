n=float(input())
if n<=250000:
    print(0.0)
elif n<=500000:
    print((n-250000)/20)
elif n<=1000000:
    print((n-500000)/10+12500)
else:
    print((n-1000000)/5+62500)
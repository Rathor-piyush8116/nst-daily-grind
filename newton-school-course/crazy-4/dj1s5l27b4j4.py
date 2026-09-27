# Your code here
a, b, c, d = map(int, input().split())

if a > b and a > c and a > d:
    print("Arjun")
elif b > a and b > c and b > d:
    print("Balram")
elif c > a and c > b and c > d:
    print("Champaklata")
else:
    print("Damodar")
// ─── 2 ───
# Your code here
r = int(input())
t = int(input())
h = int(input())

if r < 1200:
    if t == 1:
        r += 200
    elif t == 2:
        r += 80
    else:
        r += 50

elif 1200 <= r <=2000:
    if t == 1:
        r += 100
    elif t == 2:
        pass
    else:
        r -= 30

else:
    if t == 1:
        r += 50
    elif t == 2:
        r -= 30
    else:
        r -= 100

if h == 1:
    r += 50

print(r)

# r = int(input())
# t = int(input())
# h = int(input())

# if r < 1200:
#     if t == 1:
#         r += 200
#     elif t == 2:
#         r += 80
#     else:
#         r += 50

# elif 1200 <= r <= 2000:
#     if t == 1:
#         r += 100
#     elif t == 2:
#         pass
#     else:
#         r -= 30

# else:
#     if t == 1:
#         r += 50
#     elif t == 2:
#         r -= 30
#     else:
#         r -= 100

# if h == 1:
#     r += 50

# print(r)


// ─── 10 ───
1350
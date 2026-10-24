// ─── 2 ───
x1,y1=map(int ,input().split())
x2,y2=map(int ,input().split())
mode = input()
if x1 == x2 and y1 == y2:
    print("Invalid")
elif mode == "Horizontal":
    if y1 == y2:
        print("Valid")
    else:
        print("Invalid")

elif mode == "Vertical":
    if x1 == x2:
        print("Valid")
    else:
        print("Invalid")

elif mode == "Diagonal":
    if abs(x1 - x2) == abs(y1 - y2):
        print("Valid")
    else:
        print("Invalid")
else:
    print("Valid")

// ─── 20 ───
2 4
2 9
Horizontal
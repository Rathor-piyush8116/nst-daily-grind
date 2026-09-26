// ─── 9 ───
def greater(a, b):
    if a > b:
        print(a)
    else:
        print(b)


def smaller(a, b):
    if a < b:
        print(a)
    else:
        print(b)


choice = input()
a, b = map(int, input().split())

if choice == "G":
    greater(a, b)
elif choice == "S":
    smaller(a, b)

// ─── 10 ───
G
4 9
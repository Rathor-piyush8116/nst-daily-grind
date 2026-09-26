// ─── 2 ───
def greater(a, b):
    if a > b:
        return a
    else:
        return b


def smaller(a, b):
    if a < b:
        return a
    else:
        return b


choice = input()
a, b = map(int, input().split())

if choice == "G":
    print(greater(a, b))
elif choice == "S":
    print(smaller(a, b))

// ─── 7 ───
9
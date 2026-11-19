// ─── 2 ───
n = int(input())

def smallest(n):
    if n<10:
        return n

    last = n % 10
    small = smallest(n//10)

    if last < small:
        return last
    else:
        return small
print(smallest(n))

// ─── 5 ───
2
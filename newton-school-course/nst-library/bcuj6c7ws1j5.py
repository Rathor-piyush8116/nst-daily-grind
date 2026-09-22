// ─── 2 ───
# Your code here
d = int(input())
bt = int(input())
ms = int(input())

def rental_days(d):
    if d <= 0:
        return "Invalid rental duration"
    elif d <= 3:
        return 1 * d
    elif d <= 7:
        return 0.75 * d
    else:
        return 0.50 * d

def book_type(bt):
    if bt == 1:
        ans = rental_days(d) + 2
        return ans
    elif bt == 2:
        dis = rental_days(d) * 10 / 100
        ans = rental_days(d) - dis
        return ans
    else:
        ans = rental_days(d)
        return ans

def member_status(ms):
    if ms == 1:
        dispre = book_type(bt) * 10 / 100
        tans = book_type(bt) - dispre
        return tans
    else:
        tans = book_type(bt)
        return tans

if d <= 0:
    print("Invalid rental duration")
else:
    total = int(member_status(ms))
    print(total)

// ─── 5 ───
4
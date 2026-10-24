// ─── 2 ───
days = int(input())
book = input()
book_price = int(input())
years = int(input())
fine=0
if book =="Normal":
    if days <=7:
        fine = 2*days
    else:
        fine = 14+5*(days-7)
else:
    fine = 10*days

if fine > book_price:
    fine = book_price

if years >= 5:
    fine = fine//2

if fine==0:
    print("No Fine")
else:
    print(fine)

// ─── 15 ───
29
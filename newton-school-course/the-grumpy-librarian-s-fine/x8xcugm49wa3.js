// ─── 2 ───
days_late = int(input())
book = input()
book_price = int(input())
mem = int(input())
fine = 0
if book == "Normal":
    if days_late <=7:
        fine = 2*days_late
    else:
        fine = 14+5*(days_late-7)
else:
    fine = 10 *days_late

if fine > book_price:
    fine=book_price

if mem >= 5:
    fine = fine//2

if fine==0:
    print("No Fine")
else:
    print(fine)




    

// ─── 38 ───
14
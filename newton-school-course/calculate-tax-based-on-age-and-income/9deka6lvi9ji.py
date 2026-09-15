// ─── 6 ───
age, income = map(int, input().split())

if age < 18:
    if income <= 1000000:
        tax = income * 5 // 100
    elif income <= 3000000:
        tax = income * 15 // 100
    else:
        tax = income * 25 // 100
else:
    if income <= 1000000:
        tax = income * 10 // 100
    elif income <= 3000000:
        tax = income * 20 // 100
    else:
        tax = income * 30 // 100

print(tax)

// ─── 11 ───
80000
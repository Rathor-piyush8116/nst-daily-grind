// ─── 2 ───
gender, income, age =input().split()
inc=int(income)
ag=int(age)
if gender=="female" and inc<=250000 and 21<= ag <=65:
    print("Eligible")
else:
    print("Not Eligible")

// ─── 5 ───
Eligible
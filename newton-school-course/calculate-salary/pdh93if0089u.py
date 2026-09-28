// ─── 2 ───
basic_salary = int(input())
if basic_salary <= 10000:
    HRA = basic_salary * 0.20
    DA = basic_salary * 0.80
    gross_salary = basic_salary + HRA + DA
    print("The gross salary of the employee is:", gross_salary)
elif 20000 >= basic_salary > 10000:
    HRA = basic_salary * 0.25
    DA = basic_salary * 0.90
    gross_salary = basic_salary + HRA + DA
    print("The gross salary of the employee is:", gross_salary)
else:
    HRA = basic_salary * 0.30
    DA = basic_salary * 0.95
    gross_salary = basic_salary + HRA + DA
    print("The gross salary of the employee is:", gross_salary)




# The gross salary of the employee is: 21502.15
#   The gross salary of the employee is: 21502.15

// ─── 3 ───
10001
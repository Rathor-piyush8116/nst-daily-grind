basic_salary = float(input())

if basic_salary <= 10000:
  hra = basic_salary * 0.20
  da = basic_salary * 0.80
elif basic_salary <= 20000:
  hra = basic_salary * 0.25
  da = basic_salary * 0.90
else:
  hra = basic_salary * 0.30
  da = basic_salary * 0.95

gross_salary = basic_salary + hra + da
print(f"The gross salary of the employee is: {gross_salary}")
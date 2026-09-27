# Your code here
weight = int(input())
height = int(input())

height = height / 100

bmi = weight / (height * height)

bmi = round(bmi, 1)

print(bmi)

if bmi < 18.5:
    print("Underweight")
elif bmi <= 24.9:
    print("Normal weight")
elif bmi <= 29.9:
    print("Overweight")
else:
    print("Obese")
# Your code here
gender = input().strip()
year = int(input().strip())

if gender == "G":
    print("On-Campus")
elif gender == "B":
    if year == 1:
        print("On-Campus")
    else:
        print("Off-Campus")
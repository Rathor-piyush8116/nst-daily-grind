gender = input()
year = int(input())
if gender == "G":
    print("On-Campus")
elif gender == "B":
    if year == 1:
        print("On-Campus")
    else:
        print("Off-Campus")
// ─── 2 ───
gender = input()
year = int(input())
if gender == "G":
    print("On-Campus")
elif gender == "B":
    if year == 1:
        print("On-Campus")
    else:
        print("Off-Campus")

// ─── 12 ───
On-Campus


// ─── 13 ───
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
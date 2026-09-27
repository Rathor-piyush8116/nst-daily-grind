// ─── 2 ───
# temp = int(input())
# if temp < 0:
#   weather = "Freezing Weather"
# elif temp <= 9:
#   weather = "Very Cold"
# elif temp <= 19:
#   weather = "Cold"
# elif temp <= 29:
#   weather = "Normal"
# elif temp <= 39:
#   weather = "Hot"
# else:
#   weather = "Very Hot"

temp = int(input())
if temp<0:
    print("The weather today is classified as: Freezing Weather")
elif temp>=0 and temp<=9:
    print("The weather today is classified as: Very Cold")
elif temp>=10 and temp<=19:
    print("The weather today is classified as: Cold")
elif temp>=20 and temp<=29:
    print("The weather today is classified as: Normal")
elif temp>=30 and temp<=39:
    print("The weather today is classified as: Hot")
else:
    print("The weather today is classified as: Very Hot")






// ─── 43 ───
The weather today is classified as:Normal


// ─── 44 ───
temp = int(input())
if temp<0:
    print("The weather today is classified as:Freezing Weather")
elif temp>=0 and temp<=9:
    print("The weather today is classified as:Very Cold")
elif temp>=10 and temp<=19:
    print("The weather today is classified as:Cold")
elif temp>=20 and temp<=29:
    print("The weather today is classified as:Normal")
elif temp>=30 and temp<=39:
    print("The weather today is classified as:Hot")
else:
    print("The weather today is classified as:Very Hot")
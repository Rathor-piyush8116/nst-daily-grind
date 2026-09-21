'''
def is_leap(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False
'''

# Your code starts here
year = int(input())
a = is_leap(year)
if a==1:
    print("Leap Year")
else:
    print("Not a Leap Year")
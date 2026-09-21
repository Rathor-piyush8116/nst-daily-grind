#Use the following variables, and make sure to use the sep and end parameters to match the expected output.
year = "2025"
month= "05"
day="25"
hour = "14"
minutes= "30"
seconds="00"
print("Date:",end="")
print(year,month,day,sep="-",end=",")
print("Time:",end="")
print(hour,minutes,seconds,sep=":")
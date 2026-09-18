distance, age = map(int,input().split())
ans=10
if distance<=5 :
    ans=10
elif 5<distance<=15: 
    ans=20
elif 15<distance<=30:  
    ans=35
elif distance>30:
    ans=50

if age>=60:
    print(ans/2)
else:
    print(ans)
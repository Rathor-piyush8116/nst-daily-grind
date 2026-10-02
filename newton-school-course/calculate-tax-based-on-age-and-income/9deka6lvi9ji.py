// ─── 2 ───
age,income=map(int,input().split())
if income <= 1000000:
    if age < 18:
        ans = income * 0.05
        
    else:
        ans = income * 0.10 
        
elif 1000000 <income <= 3000000:
    if age < 18:
        ans = income * 0.15
       
    else:
        ans = income * 0.20
        
else:
    if age < 18:
        ans = income * 0.25
        
    else:
        ans = income * 0.30
print(int(ans))



// ─── 8 ───
80000
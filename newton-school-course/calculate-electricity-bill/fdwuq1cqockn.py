// ─── 5 ───
units = int(input())
ans=0
if units<=100:
    ans= units*4
elif 100<units<=200:
    ans=100*4 + (units-100)*5
elif 200<units<=300:
    ans= 100*4+ 100*5 + (units-200)*6
elif 300<units<=400:
    ans= 100*4+ 100*5+ 100*6 +(units-300)*7
else:
    ans= 100*4+100*5+100*6+100*7+(units-400)*8   
total= ans/10
ans = ans+total
print(round(ans,1))


// ─── 15 ───
1881.0
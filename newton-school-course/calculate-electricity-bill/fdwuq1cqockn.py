// ─── 2 ───
units = int(input())
if units <= 100:
    price = units*4
elif units <=200:
    price = 100 *4 +(units-100)*5
elif units <=300:
    price = 100 *4 + 100*5 + (units -200)*6
elif units <=400:
    price = 100 *4 + 100*5 + 100*6 + (units -300)*7
else:
    price = 100 *4 + 100*5 + 100*6 + 100 *7 + (units -400)*8

total_price = price + (price*0.1)
print(round(total_price,1))


// ─── 7 ───
1881.0


// ─── 12 ───
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
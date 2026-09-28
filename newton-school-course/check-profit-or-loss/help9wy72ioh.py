cost = int(input())
sell = int(input())
if sell > cost:
    ans=sell-cost
    print("Profit")
    print(ans)
    
elif cost > sell:
    ans=cost-sell
    print("Loss")
    print(ans)
    
else:
    print("No Profit No Loss")
    print("0")
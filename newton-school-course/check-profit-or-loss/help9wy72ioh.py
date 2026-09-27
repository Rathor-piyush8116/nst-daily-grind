cost = int(input())
sell = int(input())

if sell > cost:
    print("Profit")
    print(sell - cost)

elif sell < cost:
    print("Loss")
    print(cost - sell)

else:
    print("No Profit No Loss")
    print(0)
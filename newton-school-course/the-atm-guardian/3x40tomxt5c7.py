// ─── 2 ───
balance, amount= map(int,input().split())
if amount <= 0 or amount % 100 !=0:
    print("Invalid Amount")
elif amount > balance:
    print("Insufficient Balance")
elif amount > 20000:
    print("Daily Limit Exceeded")
else:
    print("Withdrawal Successful")

// ─── 6 ───
Withdrawal Successful
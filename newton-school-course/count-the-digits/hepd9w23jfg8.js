// ─── 2 ───
# Your code here# Read N as an integer directly
n = int(input())

count = 0

# Handle the edge case if N is 0 (though constraints say 1 <= N <= 10^9)
if n == 0:
    count = 1
else:
    while n > 0:
        count += 1
        n //= 10

print(count)

// ─── 5 ───
5
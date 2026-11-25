// ─── 27 ───
num = list(map(int, input().split()))
n = len(num)

for i in range(n):
  for j in range(0, n - i - 1):
    if num[j] > num[j + 1]:
      num[j], num[j + 1] = num[j + 1], num[j]

print(*num)


// ─── 30 ───
2 3 6 9 17 25
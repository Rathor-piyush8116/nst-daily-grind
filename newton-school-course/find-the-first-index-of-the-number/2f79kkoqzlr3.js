// ─── 2 ───

N, X = map(int, input().split())
arr = list(map(int, input().split()))

ans = -1
for i in range(N):
  if arr[i] == X:
    ans = i
    break

print(ans)

// ─── 5 ───
-1
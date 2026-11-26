// ─── 10 ───
n,m = map(int,input().split())
matrix = []
for i in range(n):
    l1 = list(map(int,input().split()))
    matrix.append(l1)

target = int(input())
ans = False
for i in range(n):
    for j in range(m):
        if matrix[i][j] == target:
            ans = True
            break
    if ans:
        break
print(ans)


// ─── 15 ───
True
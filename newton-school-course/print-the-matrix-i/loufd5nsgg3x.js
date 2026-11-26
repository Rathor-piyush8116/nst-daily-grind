// ─── 2 ───
n ,m = map(int,input().split())

matrix = []
for i in range(n):
    l1 = list(map(int,input().split()))
    matrix.append(l1)

for i in range(n):
    for j in range(m):
        print(matrix[i][j],end=" ")
    print()

// ─── 8 ───
1 2 
3 4 
5 6
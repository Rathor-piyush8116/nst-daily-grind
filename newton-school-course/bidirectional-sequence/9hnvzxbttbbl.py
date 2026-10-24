// ─── 13 ───
n = int(input())
def recursive_pr(n):
    if n<1:
        return
    print(n,end=" ")
    recursive_pr(n-1)
    print(n,end=" ")
recursive_pr(n)


// ─── 43 ───
4 3 2 1 1 2 3 4
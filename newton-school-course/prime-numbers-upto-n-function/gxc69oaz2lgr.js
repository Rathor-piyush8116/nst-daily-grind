// ─── 38 ───
# TODO: Define a function named 'isPrime' that takes an 
# integer and checks if it is a prime or not.
n = int(input())
i = 2
j = 2
def isPrime(n):
    global i
    global j
    while i < n+1:
        if j * j > i:
            if i > 1:
                print(i,end=" ")
            i += 1
            j = 2
        elif i % j == 0:
            i += 1
            j = 2
        else:
            j += 1
isPrime(n)



# TODO: Take input from user and use isPrime function to solve the problem

// ─── 41 ───
2 3 5 7 11 13 17 19 23 29
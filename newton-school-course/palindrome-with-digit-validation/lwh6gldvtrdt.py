# Your code here
n,d=map(int,input().split())
a = isPalindrome(n)
if a==1 and n%10==d :
    print(f"Number is palindrome and last digit is {d}")
elif a==1:
    print(f"Number is palindrome and last digit is not {d}")
else:
     print("Number is not a palindrome")
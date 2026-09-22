def is_triangle(a,b,c):
    #Return YES if the construction plan can go ahead, otherwise return NO.
    return "YES" if a + b > c and b + c > a and a + c > b else "NO"
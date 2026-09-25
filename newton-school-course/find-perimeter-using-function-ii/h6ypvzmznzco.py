# Your code here
def perimeter(length, breadth):
    return 2 * (length + breadth)
length, breadth = map(int,input().split())
print(perimeter(length, breadth))
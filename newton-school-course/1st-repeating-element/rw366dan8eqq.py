// ─── 2 ───
def first_repeated(arr):
    # Dictionary to store the first occurrence index of each element
    first_seen = {}
    
    # First pass: record the index of the first occurrence of each element
    for i, val in enumerate(arr):
        if val not in first_seen:
            first_seen[val] = i + 1  # 1-based indexing
            
    # Second pass: find the element that appears more than once with the minimum first index
    min_index = float('inf')
    found = False
    
    for val in set(arr):
        if arr.count(val) > 1:
            if first_seen[val] < min_index:
                min_index = first_seen[val]
                found = True
                
    return min_index if found else -1

// ─── 5 ───
Traceback (most recent call last):
  File "/box/script.py", line 9, in <module>
    n = int(input())
            ~~~~~^^
EOFError: EOF when reading a line

Exited with error status 1
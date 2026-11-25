// ─── 18 ───
def paired_product(arr):
    result = []
    for i in range(0,len(arr), 2):
        result.append(arr[i] * arr[i + 1])
    return result


// ─── 25 ───
[51, 18, 150]
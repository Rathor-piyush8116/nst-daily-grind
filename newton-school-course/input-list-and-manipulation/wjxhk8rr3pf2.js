// ─── 2 ───
nums = list(map(int, input().split()))
idx, val = map(int, input().split())
num = int(input())
second_list = list(map(int, input().split()))

nums.insert(idx, val)
print(nums)

nums.remove(num)
print(nums)

odd_index_list = nums[1::2]
print(odd_index_list)

nums.extend(second_list)
print(nums)

nums.clear()
print(nums)

// ─── 7 ───
[1, 2, 7, 3, 4, 5]
[1, 2, 7, 3, 5]
[2, 3]
[1, 2, 7, 3, 5, 2, 38, 2, 1]
[]
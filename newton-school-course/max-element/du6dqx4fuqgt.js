// ─── 12 ───
nums = list(map(int, input().split()))

curr_max = nums[0]
for val in nums:
  if val > curr_max:
    curr_max = val

print(curr_max)

// ─── 17 ───
25
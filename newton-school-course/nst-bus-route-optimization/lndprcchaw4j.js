// ─── 2 ───
# Your code here
d1, d2, d3 = map(int,input().split())
route1 = d1 + d2 + d3
route2 = 2 * d1 + 2 * d2
route3 = 2 * d1 + 2 * d3
route4 = 2 * d2 + 2 * d3
min_distance = min(route1, route2, route3, route4)
print(min_distance)

// ─── 7 ───
12
// ─── 12 ───
# Write your commands here
cd canteen
bad=$(git log -n 1 --format=%h -- prices.txt)
echo "$bad" > bad_commit.txt
git restore --source="${bad}~1" prices.txt
git add prices.txt
git commit -m "Restore price list"

// ─── 15 ───
[main 57e68b7] Restore price list
 1 file changed
All Test Cases Passed Successfully.
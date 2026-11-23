// ─── 17 ───
# Write your commands here
cd website
git switch -c redesign
cp ../drafts/new_layout.html index.html
git add index.html
git commit -m "New home page layout"

git switch main
cp ../drafts/footer_fixed.html footer.html
git add footer.html
git commit -m "Fix footer year"

git merge redesign
git branch -D dark-theme


// ─── 20 ───
[redesign 1e2c662] New home page layout
 1 file changed
[main e757c48] Fix footer year
 1 file changed
Merge made by the 'ort' strategy.
 1 file changed
Deleted branch dark-theme (was e15d257).
All Test Cases Passed Successfully.
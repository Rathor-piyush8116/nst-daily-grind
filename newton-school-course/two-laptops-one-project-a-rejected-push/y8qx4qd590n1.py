// ─── 22 ───
# Write your commands here
cd person-x/fest-site
git remote set-url origin https://github.com/nst-fest/fest-site.git

git pull --no-rebase || true
cp ../../agreed/schedule.txt schedule.txt
git add schedule.txt
git commit -m "Resolve schedule conflict"

git push origin main

cd ../../person-y/fest-site
git pull

// ─── 25 ───
Auto-merging schedule.txt
CONFLICT (content): Merge conflict in schedule.txt
Automatic merge failed; fix conflicts and then commit the result.
[main 02910eb] Resolve schedule conflict
 1 file changed
Updating 3563f7b..02910eb
Fast-forward
 2 files changed
 create mode 100644 venue.txt
All Test Cases Passed Successfully.
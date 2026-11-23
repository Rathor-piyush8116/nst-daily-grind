// ─── 7 ───
# Write your commands here
cd shop
git status
git checkout -- app.py data.csv
git status
git reset HEAD style.css
git status
git add README.md
git commit -m "Update usage section"
git status

// ─── 10 ───
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   style.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md
	modified:   app.py
	deleted:    data.csv

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   style.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

Unstaged changes after reset:
M	README.md
M	style.css
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md
	modified:   style.css

no changes added to commit (use "git add" and/or "git commit -a")
[main e91b433] Update usage section
 1 file changed
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   style.css

no changes added to commit (use "git add" and/or "git commit -a")
All Test Cases Passed Successfully.
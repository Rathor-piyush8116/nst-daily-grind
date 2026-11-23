// ─── 2 ───
# Write your commands here
cd report
git init
git config user.name "Person X"
git config user.email "personx@college.edu"

echo "notes.txt" > .gitignore

cp report_v1.txt report.txt
git add report.txt .gitignore
git commit -m "First draft"

cp report_v2.txt report.txt
git add report.txt
git commit -m "Second draft"

cp report_final.txt report.txt
git add report.txt
git commit -m "Final version"

rm report_v1.txt report_v2.txt report_final.txt

// ─── 5 ───
Initialized empty Git repository in /box/report/.git/
[main (root-commit) 72e3ecb] First draft
 2 files changed
 create mode 100644 .gitignore
 create mode 100644 report.txt
[main 224e7f5] Second draft
 1 file changed
[main a58a266] Final version
 1 file changed
All Test Cases Passed Successfully.
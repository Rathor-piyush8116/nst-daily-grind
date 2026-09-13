// ─── 2 ───
mkdir project-files
cd project-files
touch report.docx
touch summary.docx
touch draft.docx
cp report.docx project-files
mkdir old
# mv report.docx report_backup.docx
mv draft.docx old/
mv summary.docx final_summary.docx
cp final_summary.docx old/
rm report_backup.docx
pwd

// ─── 5 ───
/box/project-files
🔍 Checking project-files folder structure...
All files and folders are correctly created and organized.
# your code goes here
mkdir project-files
cd project-files
touch report.docx
touch summary.docx
touch draft.docx
cp report.docx report_backup.docx
mkdir old 
mv draft.docx old/ 
mv summary.docx final_summary.docx
cp final_summary.docx old/ 
rm report_backup.docx
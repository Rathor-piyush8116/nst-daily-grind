mkdir NewBase
cd NewBase
mkdir reports
mkdir archive
mkdir backup 
cd ..
pwd
cp OldBase/draft.txt NewBase/reports/
mv NewBase/reports/draft.txt NewBase/reports/final_report.txt
echo "MISSION COMPLETE" >> NewBase/reports/final_report.txt
cat NewBase/reports/final_report.txt
mv OldBase/old_logs NewBase/backup/ 
rm OldBase/temp/junk.txt 
rmdir OldBase/temp
rm -r OldBase
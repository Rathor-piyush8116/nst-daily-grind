// ─── 2 ───
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


// ─── 5 ───
TOP SECRET
MISSION COMPLETE
Checking your Operation Blackout setup...
Step 1 Passed: NewBase folder exists.
Step 2 Passed: reports folder exists.
Step 2 Passed: archive folder exists.
Step 2 Passed: backup folder exists.
Step 3 Passed: final_report.txt exists in reports.
Step 4 Passed: draft.txt correctly renamed (old file no longer exists).
Step 5 Passed: final_report.txt contains original content 'TOP SECRET'.
Step 6 Passed: final_report.txt contains appended content 'MISSION COMPLETE'.
Step 7 Passed: backup/old_logs folder exists.
Step 8 Passed: backup/old_logs/log1.txt exists.
Step 9 Passed: OldBase/temp/junk.txt has been removed.
Step 10 Passed: OldBase/temp folder has been removed.
Step 11 Passed: OldBase folder has been completely removed.
-------------------------------------
All steps completed successfully. Operation Blackout cleanup is correct.
-------------------------------------
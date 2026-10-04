// ─── 6 ───
mkdir CaseFiles

cd CaseFiles
touch suspects.txt
touch evidence.txt
touch summary.txt

echo "John - Seen near crime scene" > suspects.txt
echo "Maya - Works at nearby cafe" >> suspects.txt
echo "Raj - Security guard on duty" >> suspects.txt
echo "CCTV footage found" > evidence.txt
echo "Fingerprints on glass" >> evidence.txt

cat suspects.txt evidence.txt > summary.txt
cat summary.txt



// ─── 16 ───
Checking your Detective Senorita CaseFiles investigation...
Step 1 Passed: CaseFiles folder exists.
Step 2 Passed: You are inside the CaseFiles folder.
Step 3 Passed: suspects.txt exists.
Step 3 Passed: evidence.txt exists.
Step 3 Passed: summary.txt exists.
Step 4 Passed: suspects.txt contains correct suspect information.
Step 5 Passed: evidence.txt contains correct evidence information.
Step 6 Passed: summary.txt contains combined suspects and evidence information in correct order.
-------------------------------------
All steps completed successfully. Detective Senorita's case file report is correct.
-------------------------------------
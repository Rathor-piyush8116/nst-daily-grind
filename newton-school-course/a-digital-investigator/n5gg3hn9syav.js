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
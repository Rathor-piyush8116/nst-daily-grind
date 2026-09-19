// ─── 2 ───
# pwd
# ls audit_trail

chmod 750 audit_trail/
touch audit_trail/summary.txt
echo "Audit Summary Generated" >> audit_trail/summary.txt

chmod 640 audit_trail/summary.txt



// ─── 19 ───
Is all the requirements are fulfilled?
FAILURE


// ─── 25 ───
chmod 750 audit_trail
echo "Audit Summary Generated" > audit_trail/summary.txt
chmod 640 audit_trail/summary.txt
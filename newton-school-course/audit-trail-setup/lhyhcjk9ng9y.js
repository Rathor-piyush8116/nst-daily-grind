// ─── 2 ───
# pwd
# ls audit_trail

chmod 750 audit_trail/
# touch audit_trail/summary.txt
echo "Audit Summary Generated" >> audit_trail/summary.txt

chmod 640 audit_trail/summary.txt



// ─── 32 ───
script.sh: line 18: syntax error near unexpected token `>'
script.sh: line 18: `echo "Audit Summary Generated" >>> audit_trail/summary.txt'

Exited with error status 2

// ─── 33 ───
chmod 750 audit_trail
echo "Audit Summary Generated" > audit_trail/summary.txt
chmod 640 audit_trail/summary.txt
# your code goes here
cp breach_response/evidence/log_dump.txt breach_response/log_dump.txt

chmod 755 breach_response/evidence
mv breach_response/evidence breach_response/secure/evidence
chmod 555 breach_response/secure/evidence

chmod 644 breach_response/reports/incident_summary.txt
echo "Breach confirmed" >> breach_response/reports/incident_summary.txt
chmod 444 breach_response/reports/incident_summary.txt

echo "Forensics Complete" > breach_response/secure/forensics_report.txt
chmod 600 breach_response/secure/forensics_report.txt

chmod 644 breach_response/reports/incident_summary.txt
echo "Escalated to security team" >> breach_response/reports/incident_summary.txt
chmod 444 breach_response/reports/incident_summary.txt
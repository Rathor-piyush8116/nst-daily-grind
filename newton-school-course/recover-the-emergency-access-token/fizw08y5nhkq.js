rm -f token.txt
FILE=$(find ./backups -type f -readable -name "recovery.txt" | head -1)
grep '^EMERGENCY_TOKEN=' "$FILE" | sed 's/^EMERGENCY_TOKEN=//' > token.txt
cat token.txt
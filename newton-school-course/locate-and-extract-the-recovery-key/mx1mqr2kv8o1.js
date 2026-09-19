grep -Rho 'RECOVERY_KEY=[^[:space:]]*' ./backups | head -1 | cut -d'=' -f2- > key.txt
cat key.txt
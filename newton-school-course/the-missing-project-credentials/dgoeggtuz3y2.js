// ─── 2 ───
cd EventApp
grep -rn "DB_PASSWORD" . > /tmp/match.txt
file_path=$(head -n 1 /tmp/match.txt | cut -d: -f1)
grep "DB_PASSWORD" "$file_path" > db_password.txt

// ─── 5 ───
Task completed successfully
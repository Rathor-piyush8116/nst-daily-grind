// ─── 2 ───

cd Project
touch index.txt
mkdir Backup
cp -r src Backup/
mv assets/logo.png Backup/
ls -la
cp .config/version.txt .
mv draft.txt README.txt
mv README.txt Backup/
cat docs/setup.txt docs/usage.txt > Backup/documentation.txt
echo "Backup completed" >> Backup/documentation.txt
rm src/old_app.py
rm temp.txt
rm -r assets
rm -r docs
touch Backup/backup.log

// ─── 5 ───
total 8
drwxr-xr-x. 7 25264273 25264273 122 Oct 29 18:34 .
drwx------. 3 25264273 25264273  21 Oct 29 18:34 ..
drwxr-xr-x. 2 25264273 25264273   6 Oct 29 18:34 assets
drwxr-xr-x. 3 25264273 25264273  33 Oct 29 18:34 Backup
drwxr-xr-x. 2 25264273 25264273  25 Oct 29 18:34 .config
drwxr-xr-x. 2 25264273 25264273  40 Oct 29 18:34 docs
-rw-r--r--. 1 25264273 25264273  22 Oct 29 18:34 draft.txt
-rw-r--r--. 1 25264273 25264273   0 Oct 29 18:34 index.txt
drwxr-xr-x. 2 25264273 25264273  38 Oct 29 18:34 src
-rw-r--r--. 1 25264273 25264273  23 Oct 29 18:34 temp.txt
Task completed successfully
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
drwxr-xr-x. 7 25261424 25261424 122 Oct 29 17:44 .
drwx------. 3 25261424 25261424  21 Oct 29 17:44 ..
drwxr-xr-x. 2 25261424 25261424   6 Oct 29 17:44 assets
drwxr-xr-x. 3 25261424 25261424  33 Oct 29 17:44 Backup
drwxr-xr-x. 2 25261424 25261424  25 Oct 29 17:44 .config
drwxr-xr-x. 2 25261424 25261424  40 Oct 29 17:44 docs
-rw-r--r--. 1 25261424 25261424  22 Oct 29 17:44 draft.txt
-rw-r--r--. 1 25261424 25261424   0 Oct 29 17:44 index.txt
drwxr-xr-x. 2 25261424 25261424  38 Oct 29 17:44 src
-rw-r--r--. 1 25261424 25261424  23 Oct 29 17:44 temp.txt
Task completed successfully
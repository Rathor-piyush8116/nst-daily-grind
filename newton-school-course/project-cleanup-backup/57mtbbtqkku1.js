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
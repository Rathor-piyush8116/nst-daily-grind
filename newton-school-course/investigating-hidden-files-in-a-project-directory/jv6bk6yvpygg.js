cd project
ls -la > list.txt
cat .env
cat .config
cat .env .config > final.txt 
cp final.txt backup.txt
mv backup.txt report.txt 
echo " Inspection Complete" >> report.txt
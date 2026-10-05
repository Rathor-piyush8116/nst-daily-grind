// ─── 2 ───
cd client_vault

cp originals/contract.pdf .

chmod u+w originals
mv originals staging
chmod 555 staging/originals

chmod u+w audit/access.log
echo "Client data reviewed" >> audit/access.log
chmod 444 audit/access.log

echo "Staging Review Complete" > staging/staging_report.txt
chmod 600 staging/staging_report.txt

chmod u+w audit/access.log
echo "Second review complete" >> audit/access.log
chmod 444 audit/access.log




// ─── 5 ───
Is all the requirements fulfilled?
SUCCESS
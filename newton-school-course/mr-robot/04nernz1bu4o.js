mkdir Mirage
cd Mirage
mkdir vault_copy
mkdir confirmed
mkdir discarded
cd vault_copy
cp MirageBase/vault/secret.txt vault_copy
echo "CODE ALPHA" > secret.txt
echo "VERIFIED" >> secret.txt
cat secret.txt
cd ..
cd ..
pwd
mv MirageBase/archive/old.txt Mirage/confirmed/
rm MirageBase/decoys/decoy1.txt
rm MirageBase/decoys/decoy2.txt
rmdir MirageBase/decoys
rm -r MirageBase
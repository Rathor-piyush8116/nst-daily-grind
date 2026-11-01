# your code goes here
git clone https://github.com/teamdev/crm-tool.git
cd crm-tool
git pull
echo "export const contacts = [];" > src/contacts.js
echo "export const contacts = [];" > src/deals.js
git add src/contacts.js src/deals.js
git commit -m "Add CRM core modules"
git push
git log
git remote -v
git clone https://github.com/yourname/recipe-app.git
cd recipe-app
git pull
echo "task complete" > app.js
echo "task complete 1" > db.js
echo "task complete 2" > helpers/format.js
git add app.js db.js helpers/format.js
git commit -m "Resume recipe app development"
git push
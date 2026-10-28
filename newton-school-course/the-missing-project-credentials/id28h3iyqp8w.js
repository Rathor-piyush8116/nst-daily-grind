cd EventApp
find . -type f -name ".*" -exec grep -H "DB_PASSWORD" {} \; | cut -d: -f2- > db_password.txt
// ─── 2 ───
cd school-portal

# Initialize git repository if not already initialized
git init

# 1. First commit: login.html
echo "<h1>Login Page</h1>" > login.html
git add login.html
git commit -m "feat: add login page"

# 2. Second commit: dashboard.html and profile.html
echo "<h1>Dashboard Page</h1>" > dashboard.html
echo "<h1>Profile Page</h1>" > profile.html
git add dashboard.html profile.html
git commit -m "feat: add dashboard and profile pages"

# 3. Third commit: styles/main.css and styles/theme.css
mkdir -p styles
echo "body { font-family: sans-serif; }" > styles/main.css
echo ":root { --theme-color: #333; }" > styles/theme.css
git add styles/main.css styles/theme.css
git commit -m "feat: add website styles"

# Verify commit log
git log --oneline

// ─── 5 ───
Initialized empty Git repository in /box/school-portal/.git/
Staged login.html
[main b58db80] feat: add login page
 1 file(s) changed
Staged dashboard.html
Staged profile.html
[main f139286] feat: add dashboard and profile pages
 2 file(s) changed
Staged styles/main.css
Staged styles/theme.css
[main 1d8d604] feat: add website styles
 2 file(s) changed
1d8d604 feat: add website styles
f139286 feat: add dashboard and profile pages
b58db80 feat: add login page
Is question solved?
SUCCESS
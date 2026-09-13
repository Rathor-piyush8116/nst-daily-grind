SCRIPT=$(find / -type f -name "create-service" 2>/dev/null | head -1)
cat > "$SCRIPT" <<'EOF'
#!/bin/bash
mkdir -p service/controllers
mkdir -p service/models
mkdir -p service/routes
mkdir -p service/middleware
echo "API Service" > service/README.md
echo 'console.log("Server started");' > service/server.js
EOF
chmod +x "$SCRIPT"
create-service
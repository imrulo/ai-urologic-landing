#!/bin/bash
echo "========================================"
echo "   CLEAN DEPLOYMENT (Fresh Start)"
echo "========================================"

echo "[1/5] Removing corrupted git history..."
rm -rf .git

echo "[2/5] Re-initializing git..."
git init
git branch -M main

echo "[3/5] Adding project files..."
git add .
git commit -m "Fresh deploy: AIUrologic.com"

echo "[4/5] Linking to repository..."
git remote add origin https://github.com/imrulo/ai-urologic-landing.git

echo "[5/5] Force pushing clean version..."
# Using --force to overwrite the bad history on GitHub
git push --force origin main

echo "✅ Done! The repository should now be clean."

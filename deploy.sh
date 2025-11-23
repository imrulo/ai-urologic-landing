#!/bin/bash
echo "========================================"
echo "   AIUrologic.com - Manual Deploy"
echo "========================================"

echo "[1/4] Checking git status..."
git status

echo "[2/4] Adding all files..."
git add .

echo "[3/4] Committing changes..."
git commit -m "Manual deploy commit"

echo "[4/4] Pushing to GitHub..."
git push -u origin main

echo "✅ Done. Check the repository now."

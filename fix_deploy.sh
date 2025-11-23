#!/bin/bash
echo "========================================"
echo "   Fixing Deployment Target"
echo "========================================"

echo "[1/3] Removing incorrect remote..."
git remote remove origin

echo "[2/3] Setting correct remote (ai-urologic-landing)..."
git remote add origin https://github.com/imrulo/ai-urologic-landing.git

echo "[3/3] Pushing code..."
git push -u origin main

echo "✅ Done! Check https://github.com/imrulo/ai-urologic-landing"

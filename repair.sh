#!/bin/bash
echo "========================================"
echo "   AIUrologic.com - Repair & Start"
echo "========================================"

echo "[1/3] Cleaning old files..."
rm -rf node_modules .next package-lock.json
echo "✅ Cleaned."

echo "[2/3] Installing dependencies (this may take a minute)..."
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Error: npm install failed."
    exit 1
fi
echo "✅ Dependencies installed."

echo "[3/3] Starting development server..."
echo "👉 Open http://localhost:3000 in your browser when ready."
npm run dev

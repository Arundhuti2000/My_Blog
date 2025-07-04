#!/bin/bash

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Firebase
    echo "🚀 Deploying to Firebase..."
    firebase deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "Your blog is now live!"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

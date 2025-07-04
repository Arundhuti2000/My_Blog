# Personal Blog

A modern, static personal blog with admin functionality and Google authentication.

## Features

- 🎨 Clean, modern design
- 🔐 Google OAuth authentication for admin access
- ✍️ Easy post creation and management
- 📱 Fully responsive design
- ⚡ Static site generation for fast loading
- 🚀 Firebase hosting ready

## Setup Instructions

1. **Clone and Install**
   \`\`\`bash
   npm install
   \`\`\`

2. **Firebase Setup**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and add Google as a sign-in provider
   - Enable Hosting
   - Copy your config values

3. **Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase configuration
   - Set `NEXT_PUBLIC_ADMIN_EMAIL` to your Gmail address

4. **Development**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Deploy to Firebase**
   \`\`\`bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   npm run deploy
   \`\`\`

## Usage

- Visit your blog homepage to see all posts
- Sign in with Google to access admin panel at `/admin`
- Create new posts with title, content, excerpt, and tags
- Posts are automatically generated with clean URLs
- Static export ensures fast loading and easy hosting

## Customization

- Update the blog title and description in `components/header.tsx`
- Modify the about page content in `app/about/page.tsx`
- Customize colors and styling in the Tailwind classes
- Add more fields to posts by updating the post structure in `lib/posts.js`

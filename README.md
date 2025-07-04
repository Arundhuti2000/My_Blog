# Personal Blog

A modern, static personal blog with admin functionality and Google authentication, powered by Firebase Firestore.

## Features

- 🎨 Clean, modern design with pink branding
- 🔐 Google OAuth authentication for admin access
- ✍️ Easy post creation and management
- 📱 Fully responsive design
- ⚡ Static site generation for fast loading
- 🔥 Firebase Firestore database
- 🚀 Firebase hosting ready

## Setup Instructions

### 1. Clone and Install
\`\`\`bash
git clone <your-repo>
cd personal-blog
npm install
\`\`\`

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication → Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains
4. Enable Firestore Database:
   - Go to Firestore Database
   - Create database in test mode
5. Enable Hosting:
   - Go to Hosting
   - Get started and follow setup

### 3. Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your Firebase configuration:
   \`\`\`
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_ADMIN_EMAIL=your_email@gmail.com
   \`\`\`

### 4. Development
\`\`\`bash
npm run dev
\`\`\`

### 5. Deploy to Firebase
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
- Posts are automatically stored in Firestore
- Static export ensures fast loading and easy hosting

## Project Structure

\`\`\`
├── app/
│   ├── admin/           # Admin dashboard
│   ├── blog/            # Blog listing page
│   ├── posts/[slug]/    # Individual post pages
│   ├── category/[slug]/ # Category pages
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   └── page.tsx         # Homepage
├── components/          # Reusable components
├── lib/
│   ├── firebase.js      # Firebase configuration
│   └── posts.js         # Post management functions
└── public/              # Static assets
\`\`\`

## Customization

- Update the blog title and description in `components/header.tsx`
- Modify the about page content in `app/about/page.tsx`
- Customize colors and styling in the Tailwind classes
- Add more fields to posts by updating the post structure in `lib/posts.js`

## Database Structure

Posts are stored in Firestore with the following structure:
\`\`\`javascript
{
  title: string,
  content: string,
  excerpt: string,
  date: string,
  slug: string,
  tags: string[],
  category: string,
  published: boolean,
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

## Security

- Admin access is restricted to the email specified in `NEXT_PUBLIC_ADMIN_EMAIL`
- Firestore security rules should be configured for production
- Authentication is handled by Firebase Auth

## Performance

- Static site generation for optimal loading speed
- Image optimization with Next.js Image component
- Efficient Firestore queries with proper indexing
- Responsive design for all devices

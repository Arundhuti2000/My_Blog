# Personal Blog - Firebase Deployment

A beautiful, modern personal blog built with Next.js and ready for Firebase hosting.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- A Firebase project created

### Setup Instructions

1. **Clone and Install**
   \`\`\`bash
   npm install
   \`\`\`

2. **Firebase Setup**
   \`\`\`bash
   # Login to Firebase
   firebase login
   
   # Initialize Firebase (if not already done)
   firebase init hosting
   
   # Update .firebaserc with your project ID
   # Replace "your-project-id" with your actual Firebase project ID
   \`\`\`

3. **Build and Deploy**
   \`\`\`bash
   # Build the static site
   npm run build
   
   # Deploy to Firebase
   firebase deploy
   \`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog listing and individual posts
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/             # Reusable UI components
│   ├── header.tsx      # Site header
│   └── footer.tsx      # Site footer
├── public/             # Static assets
├── firebase.json       # Firebase configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
\`\`\`

## 🎨 Customization

### Update Content
- Edit the blog posts data in `app/page.tsx` and `app/blog/page.tsx`
- Update personal information in `app/about/page.tsx`
- Modify contact details in `app/contact/page.tsx`

### Styling
- Colors and themes are in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes

### Images
- Replace placeholder images in the `public/` folder
- Update image paths in components

## 🔧 Development

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
\`\`\`

## 📱 Features

- ✅ Responsive design
- ✅ Modern, clean UI
- ✅ Blog post system
- ✅ Contact form
- ✅ About page
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Mobile-friendly

## 🚀 Deployment

The site is configured for static export and Firebase hosting. Simply run:

\`\`\`bash
npm run build
firebase deploy
\`\`\`

Your blog will be live at: `https://your-project-id.web.app`

## 📝 Adding New Blog Posts

1. Add post data to the `posts` arrays in relevant files
2. Create new post pages in `app/blog/[slug]/`
3. Update navigation and links as needed

## 🎯 Next Steps

- Connect to a headless CMS (Sanity, Contentful)
- Add a contact form backend
- Implement search functionality
- Add analytics tracking
- Set up automated deployments

## 📞 Support

If you need help with deployment or customization, feel free to reach out!

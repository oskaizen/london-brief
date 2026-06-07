# The London Brief - Next.js Website

Clean, minimal website for The London Brief newsletter inspired by Social Capital's design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
london-brief/
├── app/                          # Next.js 14 app directory
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── past-briefs/page.tsx     # Newsletter grid
│   └── briefs/[slug]/page.tsx   # Individual newsletter page
├── content/
│   └── newsletters/             # Newsletter markdown files
│       ├── example-1.md
│       └── example-2.md
├── lib/
│   └── newsletters.ts           # Functions to fetch newsletters
└── public/                      # Static assets (images, logos)
```

## ✏️ Adding Newsletters

### Step 1: Create a Markdown File

Create a new `.md` file in `content/newsletters/`:

```markdown
---
title: "Your Newsletter Title"
date: "2025-08-10"
excerpt: "A 2-3 sentence summary that appears in the grid view."
image: "/images/newsletter-slug.jpg" # Optional
---

Your full newsletter content goes here.

## Section Heading

Write your analysis, insights, etc.

You can use standard markdown:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Lists
- Code blocks
```

### Step 2: Name Your File

Use kebab-case for the filename: `private-credit-risks.md`

This becomes the URL: `/briefs/private-credit-risks`

### Step 3: Deploy

```bash
git add .
git commit -m "Add new newsletter"
git push
```

Vercel auto-deploys when you push to main.

## 🎨 Customization

### Colors & Branding

Edit `app/layout.tsx` and `tailwind.config.js`:

```typescript
// Change navigation logo text
<Link href="/" className="text-xl font-semibold">
  The London Brief
</Link>

// Add your logo image
<Image src="/logo.png" alt="The London Brief" width={200} height={40} />
```

### Beehiiv Integration

In `app/page.tsx`, replace the form section with your Beehiiv embed:

1. Go to Beehiiv → Settings → Embeds
2. Copy the embed code
3. Replace the entire `<div className="bg-gray-50 border...">` section

Example:
```jsx
<div 
  dangerouslySetInnerHTML={{ __html: `
    <!-- Your Beehiiv embed code here -->
  ` }}
/>
```

### Styling

The site uses Tailwind CSS. Edit classes directly in components:

- **Text colors**: `text-gray-900`, `text-gray-600`
- **Backgrounds**: `bg-white`, `bg-gray-50`
- **Spacing**: `py-24`, `px-6`, `mb-12`
- **Typography**: `text-5xl`, `font-bold`, `leading-relaxed`

## 🖼️ Adding Images

### Newsletter Images

1. Add image to `public/images/`
2. Reference in frontmatter:
```markdown
---
image: "/images/your-image.jpg"
---
```

### Logo/Graphics

Replace the text logo in `app/page.tsx` with:

```jsx
<Image 
  src="/logo.png" 
  alt="The London Brief" 
  width={600} 
  height={200}
  priority
/>
```

## 📦 Deployment to Vercel

### First-Time Setup

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `thelondonbrief.com`
3. Follow DNS instructions from Vercel
4. In GoDaddy (or your registrar):
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`

### Auto-Deploy

Every git push to `main` automatically deploys to Vercel.

## 📝 Migrating Your WordPress Content

### Export from WordPress

1. In WordPress admin → Tools → Export
2. Download all posts as XML

### Convert to Markdown

**Option 1: Manual** (recommended for quality)
- Copy/paste each post into new `.md` file
- Add frontmatter (title, date, excerpt)
- Clean up formatting

**Option 2: Automated**
- Use [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
- Review and clean up output

### Organize Files

Save all newsletters to `content/newsletters/` with consistent naming:
- `2025-08-10-stablecoins.md`
- `2025-08-03-employment-data.md`

## 🛠️ Development Tips

### Adding New Pages

```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx
```

### Testing Locally

```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Next Steps

1. **Replace placeholder content**
   - Update About page with your full bio
   - Add your email to Contact page
   - Integrate real Beehiiv form on homepage

2. **Add your logo/graphic**
   - Export high-res PNG
   - Add to `public/` folder
   - Update homepage

3. **Migrate newsletters**
   - Convert WordPress posts to markdown
   - Add to `content/newsletters/`
   - Create featured images (optional)

4. **Deploy to Vercel**
   - Push to GitHub
   - Connect to Vercel
   - Add custom domain

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## 🆘 Troubleshooting

### "Cannot find module '@/lib/newsletters'"

Run: `npm install`

### Changes not showing

- Clear browser cache
- Restart dev server: `Ctrl+C` then `npm run dev`

### Vercel deployment fails

Check build logs in Vercel dashboard. Common issues:
- Missing environment variables
- TypeScript errors
- Build timeout (increase in settings)

## 📧 Support

Questions? Email me or check the Next.js docs.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS

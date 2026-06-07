# Quick Start Guide - Deploy in 1 Hour

Follow these steps to get your site live on Vercel.

## Step 1: Set Up Locally (10 minutes)

```bash
# Navigate to the project folder
cd london-brief

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 - you should see your site!

## Step 2: Customize Core Content (20 minutes)

### A. Update Contact Email
Edit `app/contact/page.tsx`:
```typescript
// Line 14 - Change to your email
href="mailto:your.email@example.com"
```

### B. Add Beehiiv Signup Form
Edit `app/page.tsx`:

1. Go to Beehiiv → Settings → Embeds
2. Copy the embed code
3. Replace the form div (lines 25-41) with your Beehiiv code

### C. Add Your Logo (Optional)
1. Save your logo as `public/logo.png`
2. Edit `app/page.tsx` line 10:
```jsx
<Image 
  src="/logo.png" 
  alt="The London Brief" 
  width={600} 
  height={200}
  priority
/>
```

## Step 3: Add Your First Newsletter (10 minutes)

Create `content/newsletters/test-post.md`:

```markdown
---
title: "My First Post"
date: "2025-05-24"
excerpt: "This is a test to make sure everything works correctly."
---

# Hello World

This is my first newsletter post. I can use **bold** and *italic* text.

## Section Heading

More content here.
```

Refresh your browser - it should appear in Past Briefs!

## Step 4: Deploy to Vercel (15 minutes)

### A. Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### B. Create GitHub Repository
1. Go to github.com
2. Click "New Repository"
3. Name it "london-brief"
4. Don't initialize with README (you already have one)
5. Copy the commands shown

```bash
git remote add origin https://github.com/YOUR_USERNAME/london-brief.git
git branch -M main
git push -u origin main
```

### C. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select "london-brief" repository
5. Click "Deploy"

Wait 2-3 minutes - Done! Your site is live.

## Step 5: Add Custom Domain (5 minutes)

### In Vercel:
1. Go to your project → Settings → Domains
2. Enter `thelondonbrief.com`
3. Copy the DNS records shown

### In GoDaddy (or your registrar):
1. Go to DNS settings
2. Add these records:
   - Type: A, Name: @, Value: `76.76.21.21`
   - Type: CNAME, Name: www, Value: `cname.vercel-dns.com`
3. Save

Wait 10-30 minutes for DNS to propagate.

## You're Done! 🎉

Your site is now live with:
- ✅ Clean Social Capital-inspired design
- ✅ Newsletter grid with search
- ✅ Individual newsletter pages
- ✅ Beehiiv signup integration
- ✅ Auto-deploy on git push

## Next Steps

### Add More Newsletters
Just create new `.md` files in `content/newsletters/` and push to GitHub:

```bash
git add .
git commit -m "Add new newsletter"
git push
```

Vercel automatically deploys in ~2 minutes.

### Migrate WordPress Content
See `MIGRATION_GUIDE.md` for converting your existing posts.

### Customize Design
Edit Tailwind classes in any `.tsx` file:
- Colors: `text-gray-900`, `bg-white`
- Spacing: `py-24`, `px-6`
- Typography: `text-5xl`, `font-bold`

## Common Issues

**"Module not found"**
```bash
npm install
```

**Changes not showing locally**
```bash
# Restart server
Ctrl+C
npm run dev
```

**Deployment failed on Vercel**
- Check build logs in Vercel dashboard
- Usually a TypeScript error - fix and push again

## Daily Workflow

1. Write newsletter in markdown
2. Save to `content/newsletters/your-post.md`
3. `git add . && git commit -m "New post" && git push`
4. Site updates automatically in 2 minutes

That's it! You now have a modern, fast newsletter site.

---

Questions? Check README.md or Next.js docs.

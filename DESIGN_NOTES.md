# Design Notes - Social Capital Aesthetic

Key principles to maintain the clean, minimal look:

## Typography

**Currently using:** Inter (Google Font)
- Headings: 600-700 weight (semibold to bold)
- Body: 400 weight (normal)
- Links: 600 weight

**Sizes:**
- H1: 48-64px (text-5xl)
- H2: 32-40px (text-2xl)
- Body: 16-18px (text-base to text-lg)
- Small: 14px (text-sm)

**Line Height:**
- Headings: tight (1.1-1.2)
- Body: relaxed (1.6-1.8)

## Colors

**Current Palette:**
- Background: `#FFFFFF` (pure white)
- Primary Text: `#1a1a1a` or `#000000`
- Secondary Text: `#666666`
- Tertiary: `#999999`
- Borders: `#e5e5e5` or `#f0f0f0`

**To customize:**
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

## Spacing

**Generous white space is key:**
- Section padding: `py-24` (96px vertical)
- Container padding: `px-6` (24px horizontal)
- Element margins: `mb-12` (48px) or `mb-16` (64px)

**Content widths:**
- Text-heavy pages: 800px max
- Grid layouts: 1200px max
- Forms/CTAs: 500-600px max

## Layout Principles

### Navigation
- Minimal, text-only
- Small, uppercase, or normal weight
- Subtle hover states
- Sticky or static (current: static)

### Homepage
- Large logo/wordmark
- Single tagline
- One primary CTA (newsletter signup)
- Optional secondary link

### Grid Layouts (Past Briefs)
- 3 columns on desktop
- 2 on tablet
- 1 on mobile
- Generous gaps (40-50px)
- Subtle hover effects only

### Individual Pages
- Single column, narrow (800px)
- Large headings
- Lots of breathing room
- Minimal decoration

## What to Avoid

❌ Gradients or complex backgrounds
❌ Drop shadows (except very subtle on hover)
❌ Multiple accent colors
❌ Decorative icons or graphics
❌ Animations (or keep very subtle)
❌ Tight spacing
❌ Busy headers/footers
❌ Sidebars or complex layouts

## What to Embrace

✅ White space
✅ Clean typography
✅ Simple color palette
✅ Clear hierarchy
✅ Readable line lengths
✅ Subtle interactions
✅ Fast load times
✅ Mobile-first thinking

## Social Capital-Specific Elements

Looking at socialcapital.com:

1. **Homepage**
   - Centered logo
   - Minimal nav
   - Single CTA
   - Lots of white space

2. **About Page**
   - Large "About" heading
   - Two sections: Mission + Story
   - Single column
   - Narrow content width
   - Clear hierarchy

3. **Grid Pages**
   - Clean card design
   - Image optional
   - Date → Title → Excerpt → Link
   - Consistent spacing
   - No borders or shadows

## Customization Tips

### Change Brand Color
Find all instances of:
- `bg-gray-900` → `bg-brand-primary`
- `text-gray-900` → `text-brand-primary`
- Add your color to Tailwind config

### Adjust Spacing
Global spacing in `app/layout.tsx` and page files:
- `py-24` = 96px vertical padding
- Increase to `py-32` for more space
- Decrease to `py-16` for less

### Typography
Change font in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const font = YourFont({ subsets: ['latin'] })
```

### Newsletter Cards
Edit styling in `app/past-briefs/page.tsx`:
- Line 28-29: Gap between cards
- Line 35-36: Image aspect ratio
- Line 44-46: Date styling
- Line 49-52: Title styling

## Mobile Optimization

Already responsive, but you can adjust breakpoints:

```jsx
// Desktop only
<div className="hidden lg:block">

// Mobile only
<div className="lg:hidden">

// Responsive text size
<h1 className="text-3xl md:text-5xl">
```

## Performance

Keep it fast:
- Optimize images (WebP format, proper sizing)
- Use Next.js `<Image>` component
- Lazy load below the fold
- Minimize custom fonts
- Keep bundle size small

## Accessibility

Current implementation includes:
- Semantic HTML
- Sufficient color contrast
- Hover states on interactive elements
- Alt text on images (add your own)

To improve:
- Add `aria-label` to icon buttons
- Ensure keyboard navigation works
- Test with screen reader
- Add skip to content link

---

The goal: **Less is more**. Remove rather than add.

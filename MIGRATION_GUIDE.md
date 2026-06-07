# Newsletter Migration Template

Use this template when converting your WordPress posts to markdown.

## Template

```markdown
---
title: "Newsletter Title Here"
date: "YYYY-MM-DD"
excerpt: "Write a compelling 2-3 sentence summary. This appears in the grid view and should entice readers to click."
image: "/images/slug-name.jpg"  # Optional - remove this line if no image
---

Your full newsletter content goes here.

## Use Heading 2 for Main Sections

Paragraph text with **bold** and *italic* formatting.

### Use Heading 3 for Subsections

More content here.

- Bullet points work
- Like this
- And this

1. Numbered lists
2. Also work
3. Perfectly

> Blockquotes for important callouts

[Links work like this](https://example.com)

---

## Footnotes or End Notes

Any closing thoughts or disclaimers.
```

## Conversion Checklist for Each Newsletter

- [ ] Copy title from WordPress
- [ ] Format date as YYYY-MM-DD
- [ ] Write compelling 2-3 sentence excerpt
- [ ] Copy full post content
- [ ] Convert HTML to markdown:
  - `<h2>` → `## Heading`
  - `<h3>` → `### Subheading`
  - `<strong>` or `<b>` → `**bold**`
  - `<em>` or `<i>` → `*italic*`
  - `<a href="...">` → `[text](url)`
- [ ] Remove WordPress-specific formatting
- [ ] Check for broken links
- [ ] Clean up spacing
- [ ] Name file: `slug-name.md` (use lowercase, hyphens)
- [ ] Save to `content/newsletters/`

## Quick WordPress → Markdown Conversion

### Headlines
- WordPress: `<h2>Section Title</h2>`
- Markdown: `## Section Title`

### Bold/Italic
- WordPress: `<strong>text</strong>` or `<b>text</b>`
- Markdown: `**text**`

- WordPress: `<em>text</em>` or `<i>text</i>`
- Markdown: `*text*`

### Links
- WordPress: `<a href="https://example.com">Link Text</a>`
- Markdown: `[Link Text](https://example.com)`

### Lists
- WordPress: `<ul><li>Item</li></ul>`
- Markdown:
  ```
  - Item
  - Another item
  ```

## Example Conversion

### Before (WordPress HTML):
```html
<h2>Market Analysis</h2>
<p>The S&P 500 dropped <strong>1.8%</strong> on Friday following weak employment data.</p>
<p>Read more about this on <a href="https://example.com">Bloomberg</a>.</p>
```

### After (Markdown):
```markdown
## Market Analysis

The S&P 500 dropped **1.8%** on Friday following weak employment data.

Read more about this on [Bloomberg](https://example.com).
```

## Batch Conversion Tips

1. **Export all posts from WordPress** → Tools → Export
2. **Open in text editor** (VS Code, Cursor, etc.)
3. **Convert 5-10 at a time** to maintain quality
4. **Test locally** after each batch
5. **Keep originals** until you verify everything works

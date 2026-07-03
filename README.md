# SolveSphere — Premium Dark Edition

A god-level, dark-mode educational landing page for ISC Class 12 Physics numerical solutions.

## Stack
- Pure HTML5
- Pure CSS3 (custom properties, grid, flex, backdrop-filter, gradient text)
- Vanilla JavaScript (IntersectionObserver, Canvas API, zero dependencies)

## File Structure
```
├── index.html              # Main page
├── style.css               # Entire design system
├── script.js               # Cards, canvas bg, scroll reveal, mobile menu
├── privacy-policy.html     # Dark-themed privacy page
├── robots.txt              # SEO crawler rules
├── sitemap.xml             # SEO sitemap
└── assets/                 # Place images here
    ├── logo.png
    ├── favicon.png
    ├── hero-book.png
    ├── book-cover.png
    ├── chapter-placeholder.png
    └── og-image.png
```

## Setup
1. Place images in `assets/`.
2. Edit `CONFIG` in `script.js` to set your actual Gumroad links and image paths.
3. Update `robots.txt` and `sitemap.xml` with your real domain.
4. Enable GitHub Pages in repo settings.

## Customization
- **Colors:** Edit the `:root` variables in `style.css`. The gradient accents are `var(--primary)`, `var(--accent-1)`, and `var(--accent-2)`.
- **Chapters:** Add objects to `CONFIG.products` in `script.js`.
- **Domain:** Replace `solvesphere.github.io` in `index.html` meta tags and sitemap.

## Performance
- Zero external dependencies (no fonts, no frameworks, no CDNs).
- Images use `loading="lazy"`.
- CSS is fully self-contained.
- Canvas runs at 60fps with minimal CPU usage.

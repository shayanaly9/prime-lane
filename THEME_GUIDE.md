# Website Theme Guide
## Based on: Freight Companies Australia
> Use this document to replicate the visual design, layout structure, and component patterns of the reference site in any new project.

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Brand Voice | Professional, transparent, trustworthy |
| Tagline Pattern | Short subtitle in teal, below large caps headline |
| Copyright footer | `©[YEAR] by [Brand Name]` |

---

## 2. Color Palette

```css
:root {
  /* Primary */
  --color-teal:          #3A9A82;   /* Main brand color — CTAs, headings, section BGs */
  --color-teal-dark:     #2E7D67;   /* Hover states, footer background */
  --color-teal-light:    #4DB896;   /* Accent, taglines, highlighted text */

  /* Neutrals */
  --color-white:         #FFFFFF;
  --color-off-white:     #F7F5F0;   /* Page background, alternating sections */
  --color-text-dark:     #2C2C2C;   /* Body text on light backgrounds */
  --color-text-mid:      #555555;   /* Secondary body text */
  --color-text-light:    #FFFFFF;   /* Text on teal backgrounds */

  /* Borders & Dividers */
  --color-divider:       #E0E0E0;   /* Thin horizontal rules */
}
```

**Usage Rules:**
- Teal (`#3A9A82`) is the dominant brand color — used for section backgrounds, primary buttons, nav CTAs, and footer.
- White/off-white is used for all content sections between teal blocks.
- Never use gradients — solid flat colors only.
- All text on teal backgrounds is white.

---

## 3. Typography

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Open+Sans:wght@400;600&display=swap');

:root {
  --font-heading:   'Raleway', sans-serif;   /* All headings, nav, labels */
  --font-body:      'Open Sans', sans-serif; /* Body text, paragraphs, FAQs */
}
```

### Type Scale

| Element | Font | Weight | Size | Transform | Color |
|---|---|---|---|---|---|
| Hero H1 | Raleway | 300 (light) | 3.5rem–4rem | `uppercase` | Teal |
| Section H2 | Raleway | 600 | 1.8rem | `uppercase` | Teal or White |
| Card/Column H3 | Raleway | 600 | 0.85rem | `uppercase` with wide letter-spacing | White or Dark |
| Tagline / Subtitle | Raleway | 400 | 1rem | Normal | Teal |
| Body Paragraph | Open Sans | 400 | 0.85rem–0.9rem | Normal | Dark gray or White |
| Navigation Links | Raleway | 400 | 0.85rem | Normal | Dark |
| Button Text | Raleway | 400 | 0.9rem | Normal | Teal or White |

**Key Typography Rules:**
- Main headings are ALWAYS uppercase with light (300) weight — creates elegant, airy feel.
- Column/card titles use `letter-spacing: 0.08em` for a label-like appearance.
- Body paragraphs are centered in most sections.
- Section subtitles (taglines) appear below the main heading in teal, normal weight.

---

## 4. Layout & Grid

```css
:root {
  --max-width:        950px;    /* Content container max-width */
  --section-padding:  80px 40px; /* Vertical/horizontal padding for full-width sections */
  --gutter:           30px;     /* Gap between columns */
}
```

### Grid Pattern
- **3-column grid** is the primary layout for feature/service sections.
- Columns are equal-width (`1fr 1fr 1fr`) with `~30px` gap.
- On mobile, stack to single column.
- Content is always center-aligned within columns.

### Section Alternation
The page alternates between:
1. **White/off-white section** — content on light background
2. **Teal section** — content on `#3A9A82` background with white text

This creates a strong visual rhythm. Never place two teal sections back-to-back.

---

## 5. Components

### 5.1 Navigation Bar

```
[Phone Number]                    [Logo/Brand Name]         [Nav Links]  [CTA Button]
```

- **Top bar:** Thin horizontal rule separator below nav.
- **Left:** Phone number in small, gray text.
- **Center-left:** Brand name in uppercase teal, slightly larger font.
- **Right:** Horizontal nav links (`Home`, `About`, `Services`, etc.) + outlined CTA button.
- **CTA Button style:** Outlined, rounded pill, teal border + teal text. On hover: fills teal, white text.
- Social icons (Facebook, Twitter, LinkedIn) appear top-right, above the main nav row.

```css
.nav-cta {
  border: 1.5px solid var(--color-teal);
  border-radius: 50px;
  color: var(--color-teal);
  padding: 8px 20px;
  background: transparent;
  font-family: var(--font-heading);
  transition: all 0.2s ease;
}
.nav-cta:hover {
  background: var(--color-teal);
  color: white;
}
```

---

### 5.2 Hero Section

- **Background:** White/off-white.
- **Layout:** Centered text above a full-width banner image.
- **Heading:** Large (3.5–4rem), uppercase, teal, light weight, centered.
- **Tagline:** Below heading, teal, normal weight, ~1rem.
- **Image:** Full-width (100% container width), fixed height (~320px), `object-fit: cover`.
- No overlay on image — clean, unfiltered photograph.

```html
<section class="hero">
  <div class="hero-text">
    <h1>YOUR BRAND<br>NAME HERE</h1>
    <p class="tagline">Your Brand Tagline</p>
  </div>
  <div class="hero-image">
    <img src="hero.jpg" alt="Hero" />
  </div>
</section>
```

---

### 5.3 Services / Features Section (Teal BG, 3-col)

- **Background:** Teal `#3A9A82`.
- **Section heading:** White, uppercase, centered, Raleway 600.
- **Tagline:** Below heading, white, lighter weight.
- **CTA Button:** Outlined pill button, white border + white text, centered. On hover: fills white, teal text.
- **3 Columns below:** Each column has:
  - ALL-CAPS small heading (`letter-spacing: 0.08em`)
  - Short paragraph (0.85rem)
  - Both heading and body in white

```css
.services-section {
  background: var(--color-teal);
  color: white;
  text-align: center;
  padding: var(--section-padding);
}
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--gutter);
  max-width: var(--max-width);
  margin: 0 auto;
}
.service-col h3 {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}
.service-col p {
  font-size: 0.85rem;
  line-height: 1.7;
  font-weight: 300;
}
```

---

### 5.4 CTA Button Row (3 Buttons)

- Appears as a row of 3 equal-width outlined pill buttons.
- Used inside teal sections as secondary CTAs.
- White border, white text, transparent background.
- On hover: white background, teal text.

```css
.cta-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.cta-btn-outline {
  border: 1.5px solid white;
  border-radius: 50px;
  color: white;
  padding: 10px 28px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.cta-btn-outline:hover {
  background: white;
  color: var(--color-teal);
}
```

---

### 5.5 Consulting / Story Section (White BG)

- **Background:** White.
- **Layout:** Centered single column, max-width ~660px.
- **H2:** Uppercase, teal, two lines.
- **Subtitle:** `"The Story"` in teal below heading.
- **Body text:** Two short paragraphs, centered, gray `#555`.
- **Single CTA button:** Outlined pill in teal (border + text), centered.

---

### 5.6 Blog / Article Card Row

- 3 cards in a horizontal row.
- Each card:
  - Thumbnail image (full width of card, ~180px tall, `object-fit: cover`)
  - Title text (teal, Raleway, ~1rem, two lines truncated)
  - Metadata row: eye icon + view count, comment icon + comment count, heart icon (right-aligned)
- Cards have no border/shadow — clean flat layout with subtle separation.
- Image sits directly on top of text, no inner padding above image.

---

### 5.7 FAQ / Help Centre Section (White BG, 2-col)

- **Section H2:** `HELP CENTRE` — centered, uppercase, teal.
- **2-column layout:** Each column has a question + answer.
- **Question:** Small caps, teal, ~0.85rem, `letter-spacing: 0.05em`, bold.
- **Answer:** Open Sans, gray `#555`, 0.85rem, line-height 1.7.
- No borders, no cards — clean open layout.

```css
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 60px;
  max-width: var(--max-width);
  margin: 0 auto;
}
.faq-question {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-teal);
  font-weight: 700;
  margin-bottom: 14px;
}
.faq-answer {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-mid);
  line-height: 1.75;
}
```

---

### 5.8 Footer (Teal BG)

**Two-part footer:**

**Upper footer (teal, centered):**
- Brand name in white, large uppercase.
- Tagline below in white/light teal.
- Navigation links in a 3×2 grid, all uppercase, white, underlined.

**Lower footer (slightly darker teal or same teal, 3 columns):**
- Left: Brand name, small.
- Center: `Contact` label → email + phone below.
- Right: `Follow` label → social icons (Facebook, Twitter, LinkedIn).
- Very bottom: thin bar — `©[YEAR] by [Brand Name].` in small text.

```css
.footer-upper {
  background: var(--color-teal);
  color: white;
  text-align: center;
  padding: 60px 40px 40px;
}
.footer-nav-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 16px 48px;
  justify-content: center;
  margin-top: 32px;
}
.footer-nav-grid a {
  color: white;
  text-decoration: underline;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.footer-lower {
  background: var(--color-teal-dark);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 32px 60px;
  color: white;
  font-size: 0.8rem;
}
.footer-copyright {
  background: var(--color-teal-dark);
  text-align: center;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
  padding: 12px;
  border-top: 1px solid rgba(255,255,255,0.15);
}
```

---

## 6. Spacing System

```css
:root {
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   32px;
  --space-lg:   60px;
  --space-xl:   80px;
  --space-2xl:  120px;
}
```

- Section top/bottom padding: `80px` (`--space-xl`)
- Between heading and tagline: `8px`
- Between tagline and body: `24px`
- Between body and CTA button: `32px`
- Column internal gap: `30px`
- Max content width: `950px` centered

---

## 7. Buttons — Full Reference

| Variant | Border | Background | Text | Border-radius | Use case |
|---|---|---|---|---|---|
| Primary outlined (teal) | 1.5px teal | Transparent | Teal | 50px | On white sections |
| Primary outlined (white) | 1.5px white | Transparent | White | 50px | On teal sections |
| Nav CTA | 1.5px teal | Transparent | Teal | 50px | Top nav |
| Hover (teal btn) | — | Teal fill | White | 50px | Hover state |
| Hover (white btn) | — | White fill | Teal | 50px | Hover state |

No filled buttons in the default state — all buttons are outline style. No shadow, no border-radius below 40px.

---

## 8. Imagery Style

- **Team/People photos:** Real, candid, in-context workplace photography. No stock photos.
- **Blog thumbnails:** Varied subjects — products, vehicles, workplace scenes. No text overlays.
- **Hero image:** Full-width panoramic, real people in work environment, natural lighting.
- All images: no filters, no overlays, no rounded corners (except blog thumbnails which may be square-cropped).

---

## 9. Page Section Order (Full Page Structure)

```
1.  [Top bar: phone + social icons]
2.  [Navigation bar: logo + nav links + CTA button]
    ── thin divider line ──
3.  [HERO: centered heading + tagline + full-width photo]
4.  [SERVICES SECTION — teal BG]
      - H2 heading
      - Tagline
      - "Let's Talk" CTA button
      - 3-column feature grid
      - Row of 3 outlined CTA buttons
5.  [CONSULTING/STORY — white BG]
      - H2 heading (2 lines)
      - "The Story" subtitle
      - 2 paragraphs of body text
      - Single CTA button
      - Blog card row (3 cards)
6.  [HELP CENTRE / FAQ — white BG]
      - "HELP CENTRE" heading
      - 2-column FAQ grid (2–4 Q&A pairs)
      - Single "Get in Touch" CTA button
7.  [FOOTER UPPER — teal BG]
      - Brand name + tagline
      - 3×2 navigation link grid
8.  [FOOTER LOWER — slightly darker teal]
      - 3-col: brand | contact details | social
      - Copyright bar
```

---

## 10. Responsive Breakpoints

```css
/* Desktop: default styles above */

@media (max-width: 768px) {
  .services-grid,
  .faq-grid,
  .footer-lower {
    grid-template-columns: 1fr;
  }
  .cta-row {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 2.5rem;
  }
  .footer-nav-grid {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 480px) {
  h1 { font-size: 2rem; }
  .section-padding { padding: 48px 20px; }
}
```

---

## 11. Micro-interactions & Transitions

```css
/* All interactive elements */
a, button {
  transition: all 0.2s ease;
}

/* Nav links */
nav a:hover {
  color: var(--color-teal);
}

/* Blog cards */
.blog-card:hover img {
  opacity: 0.9;
}

/* No heavy animations — clean, subtle, professional */
```

---

## 12. Dos and Don'ts

### ✅ Do
- Use flat teal sections to break up white content areas
- Keep headings uppercase and wide-spaced for a professional feel
- Center all body text within sections
- Use thin outline pill buttons exclusively
- Keep body copy short and scannable
- Use real photography, never illustrations or icons as hero content

### ❌ Don't
- Use drop shadows, card borders, or box shadows
- Use gradients anywhere
- Use filled/solid color buttons in default state
- Use rounded corners on images
- Use more than 2 font families
- Add background images behind text (except the hero photo below text)
- Use purple, blue, or warm tones — this palette is exclusively teal + neutral

---

## 13. Tech Stack Recommendations

This design works well with:

| Tool | Notes |
|---|---|
| **Next.js + Tailwind CSS** | Best for Cursor/Claude Code — configure teal color in `tailwind.config.js` |
| **Plain HTML/CSS** | Most faithful to original, easy to build section by section |
| **React + CSS Modules** | Good for component-based builds |
| **v0.dev** | Paste section descriptions from this doc as prompts |

### Tailwind Config Snippet
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#3A9A82',
          dark:    '#2E7D67',
          light:   '#4DB896',
        },
        offwhite: '#F7F5F0',
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '950px',
      },
      borderRadius: {
        pill: '50px',
      },
    },
  },
}
```

---

## 14. Cursor / Claude Code Prompt Template

Use this when prompting your AI coding tool:

```
Build a [section name] section matching this design system:
- Background: [white / teal #3A9A82]
- Font: Raleway for headings (uppercase, light weight), Open Sans for body
- All headings uppercase, teal color on white sections, white on teal sections
- Buttons: thin outlined pill style (border-radius: 50px), no fill
- Max content width: 950px, centered
- [Describe the specific section content here]
Refer to THEME_GUIDE.md for full color palette, spacing, and component specs.
```

---

*End of Theme Guide — Generated from Freight Companies Australia reference design.*

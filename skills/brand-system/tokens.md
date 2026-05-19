# WAT.ai Brand Tokens

Single source of truth for colors, typography, layout, and reusable treatments.
Every generated graphic must reference these values. Do not invent new colors,
font roles, or spacing systems.

> Values marked `VERIFY` are estimated from the examples and should be checked
> against source design files when available.

## Colors

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--bg` | `#000000` | Pure black base. Depth comes from motif layers and photos, not from changing the base. |
| `--ink` | `#FFFFFF` | Primary text, solid display type, outlined display stroke. |
| `--ink-muted` | `#A8A8A8` | Secondary metadata, role lines, body secondary text, faded motif points. |
| `--gold` | `#D8B125` | Brand accent. Metadata labels, dividers, question text, rings, rules, dot bullets. |
| `--gold-dim` | `#7A6428` | Low-emphasis gold, for large alumni question numbers and background accents. VERIFY. |
| `--grid-line` | `#1A1A1A` | Subtle grid and mesh background lines. |
| `--photo-overlay` | `rgba(0, 0, 0, 0.30)` | Alumni photo darkening layer. |
| `--frame-line` | `rgba(216, 177, 37, 0.22)` | Thin alumni cover logo frame and subtle structural borders. |

## Color rules

- Gold is reserved for metadata, accents, alumni questions, rings, and small
  structural lines.
- Display titles are white. Alumni questions may be gold because they function
  as metadata-level prompts, not body copy.
- Never use gold for long paragraph text.
- Backgrounds are always dark. No light-mode variants.
- Do not use gradients. For photos, use a flat overlay only.

## Typography

### 1. Display serif, outlined: `--font-display`

**Default:** DM Serif Display, verify against source files.

**Treatment:** outlined only, with `-webkit-text-stroke: 2px white; color:
transparent;`.

**Use for:** conceptual hero phrases, workshop titles, and optional watermarks.

**1080 square sizes:**

- `display-xl`: 260px / 0.92
- `display-lg`: 180px / 0.95

### 2. Heavy sans: `--font-sans`

**Default:** Inter, verified from watai.ca.

**Weights:**

- 900 for solid announcements and non-alumni hero text
- 700 for alumni answer emphasis
- 600 for secondary emphasis
- 400 for body copy

**Use for:** announcements, clean body copy, alumni Q&A answers, and supporting
copy that must be read naturally.

**1080 square sizes:**

- `heading-xl`: 132px / 0.95
- `heading-lg`: 96px / 1.0
- `body-xl`: 42px / 1.35
- `body-lg`: 36px / 1.38

### 3. Condensed sans: `--font-condensed`

**Default:** Bebas Neue if available. Fallbacks: Oswald, Impact, Inter Black,
Arial Narrow, sans-serif. VERIFY final brand font.

**Treatment:** solid, all caps, high letter spacing. Keep alumni Q&A questions
lighter than the large question number; avoid Impact-heavy or ultra-black
fallbacks when they make the title feel blocky.

**Use for:** alumni names, alumni questions, and people-first headers.

**1080 square sizes:**

- `alumni-name-cover`: 132px / 0.88
- `alumni-name-header`: 86px / 0.95
- `alumni-question`: 44px / 1.16
- `alumni-question-number`: 108px / 1.0
- `alumni-eyebrow`: 38px / 1.0

### 4. Monospace: `--font-mono`

**Default:** JetBrains Mono, verify against source files.

**Weights:**

- 500 for labels, eyebrow text, system tags
- 400 for captions and secondary metadata

**Use for:** all metadata, dates, locations, tags, captions, achievement labels,
and role lines under alumni names.

**1080 square sizes:**

- `label-lg`: 30px / 1.3
- `label-md`: 24px / 1.35
- `label-sm`: 18px / 1.35

## Type scale reference

```css
--display-xl: 260px;
--display-lg: 180px;
--heading-xl: 132px;
--heading-lg: 96px;
--alumni-name-cover: 132px;
--alumni-name-header: 86px;
--alumni-question: 44px;
--alumni-question-number: 108px;
--alumni-eyebrow: 38px;
--body-xl: 42px;
--body-lg: 36px;
--label-lg: 30px;
--label-md: 24px;
--label-sm: 18px;
```

Scale proportionally for banners, stories, and other aspect ratios.

## Spacing and layout

| Token | Value on 1080 square | Usage |
| ----- | -------------------- | ----- |
| `--pad` | `64px` | Default canvas padding. |
| `--pad-lg` | `78px` | Alumni Q&A outer padding. |
| `--brand-logo-h` | `48px` | Standard WAT.ai logo height. |
| `--brand-logo-h-lg` | `58px` | Alumni cover logo height when framed. |
| `--partner-logo-h` | `42px` | Standard partner logo height. |
| `--alumni-photo-w` | `514px` | Cover slide left photo panel width. VERIFY. |
| `--alumni-divider-w` | `7px` | Cover slide vertical gold divider. |
| `--avatar-size` | `128px` | Q&A slide circular avatar. |
| `--avatar-ring` | `6px` | Q&A avatar gold ring. |
| `--qa-number-left` | `64px` | Q&A question number anchor; it stays slightly left of the question. |
| `--qa-content-left` | `216px` | Shared left edge for Q&A question and answer text. |
| `--qa-question-top` | `336px` | Top edge shared by the number and question. |

## Logo

- The official written WAT.ai logo lives in `/assets/logo.svg`.
- Use the image asset, not typed text, for the main brand mark.
- Default placement: bottom-right inside the bottom brand bar.
- Minimum written-logo height: 32px on a 1080 square. Target 44 to 56px.
- Alumni cover slides may use a thin rectangular brand frame around the logo.
- Partner/company logos live in `/assets/logos/` and may appear in the bottom-left
  brand bar or in an alumni identity lockup.
- Never recolor, stretch, rotate, outline, or rebuild logos in text. If a needed
  logo file is missing, leave a clear HTML comment and list the required file.

## Alumni-specific components

### Photo panel

```css
width: var(--alumni-photo-w);
height: 1080px;
object-fit: cover;
filter: brightness(0.78);
```

Use a flat black overlay if needed. Do not add blur, glow, or gradient effects.

### Cover divider

```css
width: var(--alumni-divider-w);
background: var(--gold);
```

The divider may start below the top edge, aligned to the content block.

### Avatar ring

```css
width: var(--avatar-size);
height: var(--avatar-size);
border: var(--avatar-ring) solid var(--gold);
border-radius: 50%;
overflow: hidden;
```

### Answer text

Alumni Q&A answers use sans body copy, not monospace. Emphasis is bold white
sans, not gold.

## Things that are not brand

Do not generate these:

- Drop shadows on type
- Gold-filled main names
- Decorative emoji or icons
- Gradients
- Rounded corners, except the pill tag and circular alumni avatar
- Random photos outside alumni or people-first posts
- Typed `WAT.AI` as the main brand mark

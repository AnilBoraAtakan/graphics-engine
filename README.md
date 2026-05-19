# WAT.ai Graphics Engine

A prompt-to-graphic pipeline for WAT.ai Instagram content. Describe what you need and get a 1080×1080 PNG + caption text file, fully on-brand, in one session.

---

## Requirements

- **Node.js** (v18+ recommended)
- **Claude Code** — this repo is built to be used as a Claude Code project, not standalone scripts

---

## Setup

```bash
git clone <repo-url>
cd graphics-engine
npm install          # installs Playwright + Chromium
```

That's it. Fonts and the WAT.ai logo are already in `assets/`.

---

## How to use it

Open this repo in Claude Code. Every prompt automatically triggers the full workflow: brand-system read → graphic → caption → PNG.

### Basic prompts

```
Workshop post for "Zero to ML", Tuesday March 4th, 6–8 PM, E7 room 4053.
Include a caption.
```

```
Alumni spotlight for Jarett Dewbury — co-founder, now at MIT and ICLR.
```

```
Give me 4 different layouts for the Core Member post — same content, different compositions.
```

```
Try the same design with a constellation background instead of grid.
```

More specific prompts will give results closer to the desired output.


### Rendering manually

If you have an existing HTML file and just need to re-render it:

```bash
./render.sh generated/<file>.html            # default 1080×1080
./render.sh generated/<file>.html 1080 1920  # override size (story)
```

Output PNG lands next to the HTML file.

---

## How it works

### The pipeline

```
1. You describe the post in natural language
2. Claude reads all 6 brand-system files (colors, typography, motifs, voice, examples, logo assets)
3. Claude identifies the post category → picks the correct background motif
4. Claude fills in the HTML template and writes it to generated/<slug>.html
5. ./render.sh runs Playwright (headless Chromium) to screenshot the page at 1080×1080
6. Claude writes the caption to generated/<slug>-caption.txt
```

### Brand enforcement

The brand-system files in `skills/brand-system/` are the source of truth. Claude reads them on every invocation before writing any code. They define:

- **`tokens.md`** — the exact six color hex values, three font families, and the full type scale. Claude cannot invent new colors or fonts.
- **`motifs.md`** — the three background systems and when to use each, the four-corner metadata skeleton, and all typographic rules (outlined serif vs. solid sans, when to use the pill tag, etc.)
- **`voice.md`** — caption tone table by post category, recurring phrases, energy/emoji density rules, and things the WAT.ai voice does not do
- **`examples-annotated.md`** — three reference graphics with design decisions explained
- **`examples.md`** — three real annotated captions
- **`logo-assets.md`** — external organization logo filename mapping and placement rules

---

### Brand constraints

These are hard limits. Claude will not produce output that violates them:

| Constraint | Rule |
|-----------|------|
| Colors | Only the 6 tokens in `tokens.md`. No invented hex values. |
| Fonts | DM Serif Display (outlined display), Inter 900 (solid hero), JetBrains Mono (all metadata). No others. |
| Marks | Only `•` `›` `→` `·` `[ ]` `_`. No decorative emoji or icons inside the graphic; partner logos only from `/assets/logos/`. |
| Logos | WAT.ai written logo stays bottom-right in the brand bar. Partner/company logos go bottom-left when relevant. |
| Backgrounds | Particle, grid, or constellation. One per graphic, chosen by post category. |
| Hero | Outlined serif OR solid heavy sans — never both in the same graphic. |
| Gold | At most ~10% of visible color. Gold is an accent, not a fill. |
| No | Drop shadows, gradients, rounded corners (pill tag is the one exception), photographs. |

---

### Updating the brand system

If WAT.ai's visual identity changes, update these files before generating new content:

1. **Colors changed** → edit the token table in `skills/brand-system/tokens.md`
2. **Fonts changed** → replace files in `assets/fonts/` and update `@font-face` paths in `skills/instagram-post/template.html`
3. **New post category** → add a row to the routing table in `CLAUDE.md` and the motif-choice logic in `skills/brand-system/motifs.md`
4. **Voice changed** → update `skills/brand-system/voice.md` and add a new annotated example to `skills/brand-system/examples.md`
5. **External logos changed** → add/remove files in `assets/logos/` and update `skills/brand-system/logo-assets.md`

Do not edit `generated/` files — they are disposable output.

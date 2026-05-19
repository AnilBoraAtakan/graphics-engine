# WAT.ai Design Engine

Single-prompt → 1080×1080 IG graphic (PNG) + caption text file, fully on-brand.

---

## Read the brand system on every invocation

**Before writing any code or content, read all six files in `skills/brand-system/` — every time a new prompt arrives, not just once.**

```
skills/brand-system/tokens.md             colors, typography, type scale, logo rules
skills/brand-system/motifs.md             background systems, composition, corner skeleton
skills/brand-system/examples-annotated.md three reference graphics explained
skills/brand-system/voice.md              caption voice rules and tone table
skills/brand-system/examples.md           three annotated real captions
skills/brand-system/logo-assets.md        external logo filename mapping and placement rules
```

Skipping this step produces off-brand output. There are no exceptions.

---

## Workflow

```
1. Read all of skills/brand-system/        ← always first, every invocation
2. Identify post category                  ← determines background motif + caption energy
3. Route to the right skill(s)             ← see table below
4. Fill in skills/instagram-post/template.html for the graphic
   Write the filled file to generated/<slug>.html
5. Render to PNG: ./render.sh generated/<slug>.html
6. Generate caption via skills/caption/ skill
   Write to generated/<slug>-caption.txt
```

---

## Routing table

| Prompt signals                                  | Background motif  | Caption energy       | Skill                     |
|-------------------------------------------------|-------------------|----------------------|---------------------------|
| workshop, tutorial, learning session, class     | particle (A)      | medium · light emoji | instagram-post + caption  |
| applications open, deadline, form, CTA          | grid (B)          | medium · light emoji | instagram-post + caption  |
| alumni, spotlight, person, achievement, research| constellation (C) | medium · light emoji | instagram-post + caption  |
| IG story (1080×1920)                            | any, rescaled     | medium               | extend instagram-post     |
| banner (1500×500)                               | any, rescaled     | medium               | extend instagram-post     |

When in doubt: particle background, medium voice. If none of the categories fit cleanly, ask.

---

## Skills

- **`skills/instagram-post/`** — 1080×1080 IG square. Read `SKILL.md` before generating.
- **`skills/caption/`** — Instagram caption. Read `SKILL.md` before generating.

---

## Rendering

```bash
npm install                                 # first time — installs Playwright
./render.sh generated/<file>.html           # default 1080×1080
./render.sh generated/<file>.html 1080 1920 # override size
```

Output PNG lands next to the input HTML file.

---

## Hard constraints (always apply)

- **Colors:** only the six tokens in `tokens.md`. No invented hex values.
- **Fonts:** DM Serif Display (outlined display), Inter 900 (solid sans), JetBrains Mono (all metadata). No other families.
- **Marks:** only `•` `›` `→` `·` `[ ]` `_`. No decorative emoji or icons in the graphic; partner logos are allowed only as real image assets from `/assets/logos/`.
- **No:** drop shadows, gradients, rounded corners (pill tag is the one exception), photographs.
- **Brand bar:** WAT.ai written logo image stays bottom-right; partner logos go bottom-left when relevant.
- **Gold is a spice:** if more than ~10% of the visible color is gold, dial it back.
- **If brand-system info is missing or ambiguous, ask — never guess.**

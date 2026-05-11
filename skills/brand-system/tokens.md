# WAT.ai Brand Tokens

Single source of truth for colors, typography, and spacing. Every generated graphic must reference these values — do not invent new colors or font sizes.

> **Confirm before locking in:** values marked `⚠️` are eyeballed from PNGs and need to be verified against your source files (Figma, Illustrator, or the website's CSS).

---

## Colors

| Token            | Hex         | Usage                                                                 |
| ---------------- | ----------- | --------------------------------------------------------------------- |
| `--bg`           | `#000000`   | Pure black base — depth comes from the motif layer (particle/grid/constellation), not from the base color. |
| `--ink`          | `#FFFFFF`   | Primary text, outlined display type, solid sans display type.         |
| `--ink-muted`    | `#A8A8A8`   | Secondary metadata, descriptions, faded watermark text.               |
| `--gold`         | `#D8B125`   | Brand accent. Metadata labels, deadlines, dot bullets, accent bars.   |
| `--gold-dim`     | `#7A6428` ⚠️ | Faded/background variant of gold (e.g. the large "01" in alumni post).|
| `--grid-line`    | `#1A1A1A`   | Subtle grid/mesh background lines.                                    |

**Rules:**
- Gold (`--gold`) is reserved for metadata, accents, and small touches. **Never** use it for body text or large title fills.
- Display titles are either **white outlined** (serif) or **solid white** (heavy sans). Never gold-filled headlines.
- Backgrounds are always dark. No light-mode variants.

---

## Typography

Three type families, each with a fixed role. Mixing roles is the most common mistake — keep them in their lanes.

### 1. Display Serif (outlined) — `--font-display`
**Identification:** ⚠️ Default substitute — actual brand serif unconfirmed; verify against Figma source files and swap if different. Current default: **DM Serif Display** (Google Fonts).
**Treatment:** outlined only, via `-webkit-text-stroke: 2px white; color: transparent;` (or SVG `fill="none" stroke="white"`).
**Use for:** the hero word/phrase that names the thing — workshop title, section title, watermark text.
**Sizes:** 120–220px on a 1080² canvas. Always large enough to dominate.

### 2. Heavy Sans — `--font-sans`
**Identification:** **Inter** — verified from watai.ca.
**Weights:** 900 (Black) for the solid hero; 600 (SemiBold) for emphasis within metadata or secondary sans lines.
**Treatment:** solid white, no outline.
**Use for:** announcements ("Applications Open"), names ("JARETT DEWBURY"), CTAs.
**Sizes:** 60–110px on a 1080² canvas.
**Casing:** Title Case for announcements, ALL CAPS for names.

### 3. Monospace — `--font-mono`
**Identification:** ⚠️ Default substitute — likely **JetBrains Mono** but unconfirmed; verify against source files.
**Weights:** 400 (Regular) for body metadata; 500 (Medium) for labels and system tags.
**Use for:** *all* metadata. Dates, locations, room numbers, tags, captions, list items, the WAT.AI wordmark, deadlines, system markers.
**Sizes:** 14–24px on a 1080² canvas.
**Casing:** mostly UPPERCASE for labels (`WORKSHOP · 01`, `ALUMNI SPOTLIGHT`); lowercase for friendly metadata (`deadline: May/June xth @ 11:59 pm`).

---

## Type scale (1080×1080 canvas)

```
display-xl    220px / 0.95 line-height   → outlined serif hero ("Zero to ML")
display-lg    150px / 1.0                → outlined serif secondary ("[ Core Member ]")
heading-xl    100px / 1.0                → solid sans names ("JARETT DEWBURY")
heading-lg     72px / 1.05               → solid sans announcements ("Applications Open")
label-lg       22px / 1.4                → primary monospace metadata
label-md       18px / 1.4                → secondary monospace metadata
label-sm       14px / 1.4                → corner markers, footer wordmark
```

Scale proportionally for other canvas sizes (banner, story, etc.) — these are reference values, not absolutes.

---

## Spacing & layout

- **Canvas padding:** 60–80px on a 1080² canvas (roughly 6–8% of the shorter edge).
- **Negative space is the design.** Hero element occupies the center 50–70%; corners hold metadata; the rest is intentional black.
- **Gold accent bar:** 6–8px wide vertical bar flush to a left edge, used sparingly (alumni-style posts).

---

## Logo

- The W-mark (butterfly silhouette) lives in `/assets/logo.svg`. Always render in `--gold`.
- Lockup: `[mark] WAT.AI` in monospace, gold or muted-gold depending on context.
- Default placement: bottom-right. Alt placements: bottom-left paired with `WATAI.CA` bottom-right.
- Minimum mark height: 24px. Never recolor or rotate.

---

## Things that are *not* brand

These look on-brand but aren't part of the system — don't generate them:
- Drop shadows on type
- Gradients (gold-to-white, fade-to-black, etc.)
- Rounded corners on anything except the pill-outline tag
- Decorative emoji or icons (the W-mark, chevron `›`, arrow `→`, brackets `[ ]`, dot `·`, bullet `•` are the full vocabulary)

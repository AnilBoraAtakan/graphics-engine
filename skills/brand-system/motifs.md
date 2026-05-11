# WAT.ai Visual Motifs & Grammar

This file describes *how* WAT.ai compositions are built. It is intentionally principle-based, not template-based — the goal is for new formats (banner, story, OG image, etc.) to feel native, not copied.

---

## Background systems

WAT.ai uses three coded background treatments. Each signals a content category. Pick the one that matches the post's purpose; do not mix them within a single graphic.

### A. Particle / dust scatter
**Signals:** events, learning content, workshops, anything with energy or momentum.
**Look:** asymmetric scatter of small white dots and dust, denser in one quadrant, fading to empty black in opposite quadrant. Reads like deep space or scattered chalk dust.
**Implementation hint:** SVG with 200–400 small `<circle>` elements at varying opacity (0.1–0.6) and radius (0.5–2px), distributed via Poisson disk or weighted random.
**Reference:** "Zero to ML" workshop poster.

### B. Grid / mesh
**Signals:** structured calls to action, applications, forms, deadlines, anything procedural.
**Look:** thin grid lines (`--grid-line` color) at ~40px spacing, slight perspective warp toward edges (lines bend outward like a fisheye or topographic warp).
**Implementation hint:** SVG `<pattern>` with two crossed lines, optionally distorted via `feDisplacementMap` or hand-tuned path. Lines are 1px, very low contrast.
**Reference:** "Core Member Applications Open" poster.

### C. Constellation / network graph
**Signals:** people, achievements, alumni, research, connection, community.
**Look:** sparse scatter of dots with faint lines connecting nearby pairs — like a force-directed graph at low density. Asymmetric, denser in the upper-right by default.
**Implementation hint:** generate ~30–50 random points, connect each to its 2 nearest neighbors with a 0.3-opacity stroke. Dots are small (1–2px) in `--ink-muted`.
**Reference:** "Alumni Spotlight: Jarett Dewbury" poster.

**Choosing:** workshop/event → A. Application/deadline → B. Profile/spotlight → C. If none fit cleanly, default to A but keep it sparse.

---

## Typographic grammar

### The three-voice system
Every composition uses at most three type roles, in this hierarchy:
1. **Hero** — outlined serif OR solid heavy sans, never both. This is the one element the eye lands on first.
2. **Metadata** — monospace, gold or muted, in corners and edges.
3. **Detail** — monospace at smaller size, lists and supporting copy.

If you find yourself reaching for a fourth style, you're overdesigning. Stop.

### Outlined serif vs. solid sans for the hero
- **Outlined serif:** abstract, conceptual, system-level ("Zero to ML", "[ Core Member ]"). Use when the title is a *thing* or a *concept*.
- **Solid heavy sans:** a person, a verb, an announcement ("JARETT DEWBURY", "Applications Open"). Use when the title is a *who* or a *what's happening*.

### Watermark layer (optional)
Repeating the hero word as a faded outlined serif at the very top and bottom edges (Image 2 does this) creates depth. Use when the canvas would otherwise feel empty. Opacity ~10–15%.

---

## Corner metadata pattern

Almost every WAT.ai graphic uses this 4-corner anchor system:

```
┌─────────────────────────────────────────┐
│ TL: primary metadata    TR: system tag  │
│  (• date, location)      (WORKSHOP · 01)│
│                                         │
│                                         │
│            [ HERO ELEMENT ]             │
│                                         │
│                                         │
│ BL: details/list        BR: WAT.AI logo │
└─────────────────────────────────────────┘
```

- **Top-left (gold):** the most important metadata for the post — what + when. Prefixed with `•`.
- **Top-right (muted):** system marker — series number, vertical, version. Smaller, less saturated. Often two stacked lines like `WORKSHOP · 01` / `SPRING_26`.
- **Bottom-left:** chevron lists, supporting details, or empty.
- **Bottom-right:** WAT.AI lockup. Sometimes split with `WATAI.CA` in the opposite bottom corner.

Not every corner must be filled, but the pattern is the skeleton.

---

## Bullet & punctuation vocabulary

The full set of WAT.ai-native marks. Use these; don't invent new ones.

| Mark    | Name              | Usage                                                              |
| ------- | ----------------- | ------------------------------------------------------------------ |
| `•`     | dot bullet        | Prefix to primary metadata (gold). One per line, like a status LED.|
| `›`     | chevron           | List items in bottom-left detail area. Always gold or muted.       |
| `→`     | arrow             | Directional callout for affiliations, destinations ("→ MIT + ICLR").|
| `·`     | middle dot        | Separator inside a single line of metadata ("WAT.AI · BIOMEDICAL ENGINEERING"). |
| `[ ]`   | brackets          | Wrap a hero noun phrase to mark it as a system entity ("[ Core Member ]"). |
| `_`     | underscore        | Used inside system tags (`SPRING_26`). Never as a separator in prose. |

---

## Pill outline tag

A capsule-shaped, gold-outlined badge for a single piece of pinpoint info — typically a room number or location code (`E7/PSE 2409`).

- Border: 2px solid `--gold`
- Padding: 16px horizontal, 10px vertical
- Border-radius: 999px (full pill)
- Inside: dot bullet `•` + monospace caps text in gold
- Use sparingly — at most one per graphic.

---

## Composition rules

1. **One hero, one decision.** Each graphic answers a single question (what is this? when is it? who is it?). If you can't say what the post is about in five words, the design isn't done.
2. **Edges hold the system, center holds the message.** Metadata to the corners, hero to the middle, negative space everywhere else.
3. **Gold is a spice, not a sauce.** If more than ~10% of the visible color is gold, dial it back.
4. **Black space is content.** Resist the urge to fill empty areas. Particle/grid/constellation backgrounds are *atmosphere*, not filler — keep them low-opacity and structural.
5. **Outlined serif and solid sans are mutually exclusive in the hero slot.** Pick one per graphic.

---

## Extending to new formats

When generating a format that doesn't have an example yet (e.g., website banner 1500×500, IG story 1080×1920, OG image 1200×630):

1. Pick the background motif by content type (A/B/C above), scaled to the new aspect ratio.
2. Re-apply the corner-metadata skeleton, adapted to the canvas shape (a wide banner pushes corners further apart; a vertical story stacks them top/bottom).
3. Re-scale the type using the proportional rule (display ≈ 20% of shorter edge, label ≈ 2% of shorter edge).
4. Keep gold to ~10% of visible color, monospace for all metadata, one hero element.

If the output looks like the IG examples but stretched, you've copied. If it looks like a new artifact built from the same vocabulary, you've designed.

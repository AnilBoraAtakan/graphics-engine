# Skill: instagram-post

Generates a filled-in HTML file (1080×1080) ready to render to PNG via `render.sh`.

---

## When to invoke

Any request for an Instagram square graphic — workshop poster, applications announcement,
alumni spotlight, or any format that maps to the 1:1 canvas. For other aspect ratios
(story 1080×1920, banner 1500×500) adapt the template using the proportional rules in
`motifs.md` → "Extending to new formats."

---

## Pre-conditions

Before filling in any HTML, confirm you have already read **all five** brand-system files
this invocation. If not, read them now before continuing.

---

## Workflow

1. **Identify the post category** from the prompt.
   - Workshop / learning / event → motif A (particle)
   - Application / deadline / CTA → motif B (grid)
   - Person / alumni / spotlight → motif C (constellation)
   - Uncertain → default A, note the choice.

2. **Choose the hero type.**
   - Abstract concept, system-level title → outlined serif (`display-outlined`)
   - Person's name, active announcement → solid heavy sans (`heading-solid-xl` or `heading-solid-lg`)
   Never use both in the hero slot.

3. **Plan the four corners** using the skeleton from `motifs.md`:
   - TL: primary gold metadata — the most important what + when (prefixed `•`)
   - TR: system tag — series marker, vertical, season (muted, two stacked lines)
   - BL: supporting detail, chevron list, or empty
   - BR: WAT.AI lockup (always)

4. **Decide on optional elements:**
   - Pill tag: only if there is a single pinpoint location/code to highlight (at most one per graphic).
   - Watermark: only if the canvas would feel empty without it. Repeat the hero word at ~12% opacity.
   - Accent bar: only for alumni/spotlight posts (left edge, 7px, gold).

5. **Fill in `template.html`:**
   - Copy the template to `generated/<slug>.html`
   - Set `data-motif` on `.canvas`
   - Replace placeholder comments with real content
   - Adjust font sizes if the hero word is long (scale down from display-xl, keeping the
     type within the padded area: 1080 − 120px = 960px max line width)

6. **Sanity-check before saving:**
   - Is gold used in more than ~10% of visible color? Dial it back.
   - Are there any colors, fonts, or marks not in the token set? Remove them.
   - Does every piece of metadata use JetBrains Mono? If not, fix it.
   - Is the hero the single dominant element the eye lands on first? If not, simplify.

7. **Render:** `./render.sh generated/<slug>.html`

---

## Template location

`skills/instagram-post/template.html`

Copy it; do not edit it in place.

---

## What the background JS expects

The inline `<script>` reads `canvas.dataset.motif` and draws the SVG automatically.
Valid values: `particle` | `grid` | `constellation`.

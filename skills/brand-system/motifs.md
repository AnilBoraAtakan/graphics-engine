# WAT.ai Visual Motifs & Grammar

This file describes how WAT.ai compositions are built. The goal is for new
formats to feel native to the brand, not copied from a single template.

## Background systems

WAT.ai uses three coded background treatments. Each signals a content category.
Pick the one that matches the post's purpose. Do not mix background systems
within a single graphic unless an alumni carousel page explicitly needs a photo
plus a very faint constellation layer.

### A. Particle / dust scatter

**Signals:** events, learning content, workshops, anything with energy or momentum.

**Look:** asymmetric scatter of small white dots and dust, denser in one quadrant,
fading to empty black in the opposite quadrant. It should read like deep space or
scattered chalk dust.

**Implementation hint:** SVG with 200 to 400 small `<circle>` elements at varying
opacity, radius, and density.

**Reference:** Zero to ML workshop poster.

### B. Grid / mesh

**Signals:** structured calls to action, applications, forms, deadlines, anything
procedural.

**Look:** thin grid lines in `--grid-line` at roughly 40px spacing, with slight
perspective warp toward the edges.

**Implementation hint:** SVG paths or a pattern with crossed lines. Lines should
be 1px and very low contrast.

**Reference:** Core Member Applications Open poster.

### C. Constellation / network graph

**Signals:** people, achievements, alumni, research, connection, community.

**Look:** sparse dots with faint lines connecting nearby pairs. Alumni Q&A slides
use the constellation mostly at the corners and edges, not behind the main answer
copy. The second Carter Demars example has a light network in the upper-left and
a second cluster in the lower-right.

**Implementation hint:** generate 30 to 55 random points and connect each to its
two nearest neighbors with a low-opacity stroke. Dots are small in `--ink-muted`.

**Reference:** Carter Demars alumni carousel.

## Alumni spotlight system

The new alumni examples define a two-slide grammar. Use this section whenever the
prompt asks for an alumni spotlight, alumni carousel, profile, interview, or
quote post.

### 1. Alumni cover slide

**Purpose:** identify the person fast.

**Layout:**

- 1080x1080 black canvas.
- Left photo panel occupies about 47 to 50 percent of the canvas width and the
  full height.
- The photo is darkened slightly so it sits inside the black system rather than
  looking pasted on.
- A 6 to 8px vertical gold divider separates photo and content. It starts near
  the top of the content block rather than always spanning the full canvas.
- Right content panel holds all typography.
- Top of content panel: gold monospace eyebrow, usually `ALUMNI SPOTLIGHT`.
- Hero: alumni name in solid white condensed all-caps, split across lines when
  needed.
- A short horizontal gold rule sits below the name.
- Identity lockup: company logo plus company name if useful, then a muted role
  line.
- Achievement row: up to two small achievement chips, icon or logo above, muted
  label below.
- Bottom-right: WAT.ai written logo. A thin rectangular brand frame is allowed
  on cover slides if it matches the example.

**Photo handling:**

- Alumni cover slides are the only square-post format where photography is a
  primary design element.
- Use the supplied portrait. Do not generate or invent a portrait.
- Crop toward face and shoulders, with the subject weighted left or center-left.
- Add a black overlay or brightness reduction if the text side feels detached.
- Do not apply decorative filters, gradients, or drop shadows.

### 2. Alumni Q&A slide

**Purpose:** present one interview question and one answer.

**Layout:**

- Top-left header row: circular avatar with gold ring, then the alumni name in
  large white condensed all-caps.
- Under the name: gold monospace role line, for example
  `MEMBER OF TECHNICAL STAFF @ OPENAI`.
- Left side: oversized question number in `--gold-dim`, usually `01`, `02`, etc.
  The number is a side marker, not part of the title. Its top edge aligns with
  the top of the question text, and it sits slightly left of the text column
  with clear separation.
- Main question: gold condensed all-caps, two to three lines. It shares the same
  left edge as the answer text. Do not let the number overlap, touch, or tuck
  underneath the question.
- Answer: large white sans body copy, aligned to the same left edge as the
  question, with generous line-height.
- Emphasis inside the answer may use bold white sans.
- A very thin gold horizontal rule may cross the body area as a structural line.
  It should be low-contrast and never block legibility.
- WAT.ai written logo stays bottom-right.
- Constellation motif should live around edges, especially upper-left and
  lower-right, leaving the body text area clean.

**Copy density:**

- Use one question per slide.
- Answer copy should usually be 45 to 90 words. If the answer is longer, split it
  across multiple Q&A slides.
- Avoid tiny text. On a 1080 square, answer text should usually be 36 to 44px.
- Avoid overly heavy question typography. The question should be narrower and
  lighter than the number; reduce letter spacing or font size before letting it
  collide with the number.

## Typographic grammar

### The four-voice system

Every composition uses at most four type roles. Most non-alumni posts still use
three.

1. **Hero:** outlined serif, solid heavy sans, or condensed solid sans. Pick one.
2. **Metadata:** monospace, gold or muted.
3. **Detail:** monospace for lists, dates, tags, and auxiliary facts.
4. **Interview body:** clean sans body copy for alumni Q&A answers only.

### Outlined serif, heavy sans, and condensed sans

- **Outlined serif:** abstract, conceptual, system-level titles such as
  `Zero to ML` or `[ Core Member ]`.
- **Solid heavy sans:** active announcements such as `Applications Open`.
- **Condensed solid sans:** people, alumni names, and alumni interview questions.
  This is the dominant type style in the Carter Demars examples.

Never use two hero styles in the same hero slot.

### Watermark layer

Repeating the hero word as a faded outlined serif at the very top or bottom can
create depth. Use only when the canvas would otherwise feel empty. Alumni Q&A
slides should usually avoid watermark text because the answer copy needs room.

## Corner metadata pattern

Almost every non-alumni WAT.ai graphic uses this four-corner anchor system:

```text
top-left: primary metadata        top-right: system tag
center: hero element
bottom-left: details or logos     bottom-right: WAT.ai logo
```

- **Top-left in gold:** most important metadata, usually prefixed with `•`.
- **Top-right in muted:** system marker, series, vertical, or season.
- **Bottom-left:** chevron list, supporting detail, partner logos, or empty.
- **Bottom-right:** WAT.ai written logo.

Alumni cover and alumni Q&A pages modify this skeleton, but the bottom-right
brand anchor remains consistent.

## Bottom brand bar

The lower edge should remain consistent across generated graphics:

- Keep a clear bottom band of roughly 72 to 96px inside the canvas padding.
- Place optional partner logos on the left side of that band for event and
  sponsor posts.
- Place the WAT.ai written logo on the right side of that band.
- Do not use the old typed `WAT.AI` lockup when the image logo is available.
- If a bottom-left detail list is needed, place it above the brand bar instead
  of colliding with logos.
- The brand bar should feel anchored, not decorative.
- Alumni cover slides may use a subtle rectangular frame around the WAT.ai logo;
  other formats should not.

## External organization logos

When the prompt names a major company, school, accelerator, sponsor,
collaborator, or alumni workplace, check `/assets/logos/` for a matching SVG or
PNG and include the logo if it helps recognition.

Logo usage rules:

- Use the file mapping in `logo-assets.md`; do not invent filenames.
- Prefer SVG. PNG is acceptable if SVG is unavailable.
- Use one-color white or official monochrome versions when available.
- Keep partner logos visually subordinate to the hero and WAT.ai logo.
- Limit to 1 to 3 external logos per square post.
- If a logo is missing, leave an HTML comment placeholder and report the exact
  filename needed.

## Bullet and punctuation vocabulary

Use these native marks. Do not invent new decorative symbols.

| Mark | Name | Usage |
| ---- | ---- | ----- |
| `•` | dot bullet | Prefix to primary metadata, like a status LED. |
| `›` | chevron | List items in bottom-left detail area. |
| `→` | arrow | Directional callout for affiliations and destinations. |
| `·` | middle dot | Separator inside one metadata line. |
| `[ ]` | brackets | Wrap a system noun phrase. |
| `_` | underscore | Used inside system tags such as `SPRING_26`. |

## Pill outline tag

A capsule-shaped, gold-outlined badge for one pinpoint detail, usually a room
number or location code.

- Border: 2px solid `--gold`
- Padding: 16px horizontal, 10px vertical
- Border-radius: 999px
- Inside: dot bullet plus monospace caps text in gold
- Use sparingly, at most one per graphic

## Composition rules

1. **One hero, one decision.** Each graphic answers one question.
2. **Edges hold the system, center holds the message.** Metadata belongs to
   corners and edges. The hero or answer owns the middle.
3. **Gold is a spice, not a sauce.** If more than about 10 percent of the visible
   color is gold, reduce it.
4. **Black space is content.** Backgrounds are atmosphere, not filler.
5. **Photography is exceptional.** Use photos only for alumni and people-first
   posts, and only when supplied.
6. **Do not mix hero styles.** Pick one dominant hero treatment per slide.

## Extending to new formats

When generating a format that does not have an example yet:

1. Pick the background motif by content type.
2. Re-apply the corner-metadata skeleton or the alumni carousel skeleton.
3. Scale type proportionally using the shorter edge.
4. Keep gold limited, metadata monospace, and the WAT.ai logo consistent.
5. For alumni stories or banners, preserve the photo-plus-identity split for
   covers and the avatar-plus-question hierarchy for Q&A pages.

# Skill: instagram-post

Generates a filled-in HTML file for a 1080x1080 WAT.ai Instagram graphic and
renders it to PNG via `render.sh`.

## When to invoke

Use this skill for Instagram square graphics:

- Workshop posters
- Application announcements
- Event graphics
- Alumni spotlight covers
- Alumni Q&A carousel slides
- Profile or quote posts that map to a square canvas

For other aspect ratios, adapt the same grammar using `motifs.md` under
"Extending to new formats."

## Pre-conditions

Before filling in HTML, read the brand-system files for this invocation:

1. `tokens.md`
2. `motifs.md`
3. `logo-assets.md`
4. `template.html`
5. Any prompt-specific content file
6. Any supplied image or portrait

If the post names a company, school, accelerator, sponsor, collaborator, or
alumni workplace, check `logo-assets.md` for the correct local logo filename.

## Workflow

### 1. Identify the post category

- Workshop, learning, event: motif `particle`
- Application, deadline, CTA: motif `grid`
- Person, alumni, spotlight, profile, interview: motif `constellation`
- Uncertain: default to `particle` and note the choice

### 2. Identify the layout

Set `data-layout` on `.canvas`:

- `standard`: default corner-metadata layout
- `alumni-cover`: split photo plus identity slide
- `alumni-qa`: avatar, question number, question, and answer slide

Use `alumni-cover` for the first slide of an alumni carousel.
Use `alumni-qa` for each interview question slide.

### 3. Choose the hero type

- Abstract concept or system-level title: outlined serif
- Announcement: heavy solid sans
- Person name or alumni question: condensed solid sans

Never use more than one hero style in the hero slot.

### 4. Build the standard layout

For `data-layout="standard"`:

- Top-left: primary gold metadata, prefixed with `•`
- Top-right: muted system tag
- Center: one dominant hero
- Bottom-left: supporting details or partner logos
- Bottom-right: WAT.ai written logo

Keep body/detail text at `label-md` or larger unless it is truly tertiary.

### 5. Build the alumni cover layout

For `data-layout="alumni-cover"`:

- Use the supplied portrait in `.alumni-photo`.
- Crop face and shoulders into the left panel.
- Add the vertical gold divider.
- Right content block:
  - `.alumni-cover-eyebrow`: `ALUMNI SPOTLIGHT`
  - `.alumni-cover-name`: alumni name, all caps, split across lines
  - short gold rule
  - workplace logo and company name if available
  - muted role line
  - up to two achievement chips
- WAT.ai logo stays bottom-right. A subtle logo frame is allowed.

Do not invent a portrait. If the prompt does not supply a portrait, generate a
text-only alumni layout or ask for the photo depending on the user's request.

### 6. Build the alumni Q&A layout

For `data-layout="alumni-qa"`:

- Top-left header:
  - circular avatar with gold ring
  - alumni name in condensed white all caps
  - gold monospace role line
- Left side: large dim-gold question number such as `01`
- Main question: gold condensed all-caps, sharing the same left edge as the answer
- Answer: large white sans body copy, aligned to the question
- Emphasis: bold white sans only
- Optional structural rule: thin, low-contrast gold horizontal line
- WAT.ai logo remains bottom-right

For every Q&A slide after the cover, preserve this geometry:

- The question number sits to the left of the text column.
- The top of the number aligns with the top of the question.
- The question and answer use the same `left` value.
- Leave visible horizontal space between the number and question. They must not
  overlap or visually merge.
- If a question is long, reduce question font size or letter spacing before
  moving it into the number.

Use one question per slide. If the answer is longer than about 90 words, split it
across multiple slides.

### 7. Optional elements

- Pill tag: only for one pinpoint location or code
- Watermark: only if the canvas feels empty
- Accent bar: alumni or spotlight posts only
- Partner logos: use local files from `/assets/logos/`

### 8. Fill `template.html`

- Copy the template to `generated/<slug>.html`.
- Set `data-motif` and `data-layout`.
- Replace placeholder comments with real content.
- For generated files, update paths:
  - `../../assets/logo.svg` to `../assets/logo.svg`
  - `../../assets/logos/<name>.svg` to `../assets/logos/<name>.svg`
  - `../../assets/photos/<name>.jpg` to `../assets/photos/<name>.jpg`
- If a needed partner logo file is missing, leave:
  `<!-- Missing logo: assets/logos/openai.svg -->`
  and report the filename.

### 9. Sanity-check before saving

- Is there exactly one dominant hero or question?
- Is gold below roughly 10 percent of the visible color?
- Are names and questions condensed all-caps on alumni slides?
- Is the alumni answer in readable sans body copy, not monospace?
- Is every metadata item monospace?
- Is meaningful text large enough for an Instagram feed preview?
- Is the WAT.ai logo anchored bottom-right?
- Are all logos loaded from assets rather than rebuilt in text?
- If a photo is used, was it supplied by the prompt?

### 10. Render

Run:

```bash
./render.sh generated/<slug>.html
```

For a carousel, render each slide separately using a consistent slug pattern:

```bash
./render.sh generated/alumni-carter-demars-01.html
./render.sh generated/alumni-carter-demars-02.html
```

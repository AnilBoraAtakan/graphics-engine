# Graphics Engine User Manual

This manual explains how to use the WAT.ai graphics engine to create
on-brand Instagram graphics and captions from a natural-language prompt.

The engine is designed for a Claude Code workflow: you open this repository,
describe the post you need, and the agent reads the brand system, creates an
HTML graphic in `generated/`, renders a PNG, and writes a caption text file.

## What the engine produces

For a standard post, the engine creates:

- `generated/<slug>.html` - the source graphic.
- `generated/<slug>.png` - the rendered image.
- `generated/<slug>-caption.txt` - the Instagram caption, when requested.

The default image size is `1080x1080`, suitable for an Instagram square post.
The renderer can also output other sizes, such as `1080x1920` for a story.

## Requirements

- Node.js 18 or newer.
- npm dependencies installed with `npm install`.
- Claude Code or a compatible coding-agent workflow.

The repository already includes the main WAT.ai logo, brand fonts, external
organization logos, post templates, and brand-system instructions.

## First-time setup

From the repository root:

```bash
npm install
```

This installs Playwright and the Chromium browser used by the renderer.

The project root should contain these important paths:

```text
assets/                    Brand logo, fonts, and organization logos
generated/                 Disposable output files
manuals/                   Human-facing manuals
scripts/render.js          Playwright screenshot renderer
skills/brand-system/       Brand rules and examples
skills/instagram-post/     Instagram graphic template and workflow
skills/caption/            Caption workflow
render.sh                  Rendering helper
CLAUDE.md                  Agent workflow and routing rules
README.md                  Short project overview
```

## Standard workflow

Use this workflow when asking the agent to generate a post:

1. Open the `graphics-engine` repository in Claude Code.
2. Describe the post in natural language.
3. Include all concrete details: title, date, time, location, deadline, role,
   partner names, URLs, people, and whether a caption is needed.
4. The agent reads the brand system under `skills/brand-system/`.
5. The agent chooses the correct post category and background motif.
6. The agent creates `generated/<slug>.html`.
7. The agent renders it with `./render.sh generated/<slug>.html`.
8. The agent writes `generated/<slug>-caption.txt` if a caption was requested.
9. Review the PNG and caption before posting.

Do not edit files in `generated/` as source-of-truth assets. Treat them as
disposable output that can be regenerated.

## Example prompts

Workshop post:

```text
Create an Instagram post for "Zero to ML", Tuesday March 4th, 6-8 PM,
E7 room 4053. Include a caption.
```

Application announcement:

```text
Create a Core Member applications post for Spring 2026. Deadline is
March 29th at 11:59 PM. Mention that all experience levels are welcome.
Include a caption.
```

External speaker or collaboration:

```text
Create a post for a WAT.ai collab with Unsloth AI. Daniel Han is hosting
an online session Tuesday Nov 25th at 6 PM about RL finetuning and AGI.
Include a caption and use the Unsloth logo if available.
```

Alumni spotlight:

```text
Create an alumni spotlight carousel for Jane Doe, WAT.ai alum now at
OpenAI as a Member of Technical Staff. Use the supplied portrait.
Slide 1 should be the cover. Slides 2 and 3 should be Q&A slides.
Include captions.
```

Layout exploration:

```text
Give me 4 different square-layout options for the Core Member application
post using the same copy. Keep all options on brand.
```

Revision:

```text
Try the same post with a constellation background and make the deadline
more prominent. Keep the WAT.ai logo bottom-right.
```

## Choosing the post category

The category determines both the graphic background and the caption tone.

| Prompt signals | Background motif | Typical caption tone |
| --- | --- | --- |
| Workshop, tutorial, learning session, class, event | Particle scatter | Medium energy, light emoji |
| Applications, deadline, form, recruitment, CTA | Grid or mesh | Medium to high energy |
| Alumni, spotlight, person, achievement, research | Constellation graph | Medium energy, light emoji |
| Technical event, speaker, partner collab | Particle or constellation depending on content | Medium energy, restrained emoji |
| Recap or wrap-up | Motif chosen by content | Warm, medium emoji |

When the prompt is ambiguous, the default is a particle background and
medium-energy caption voice.

## Manual rendering

If an HTML file already exists and only needs rendering, run:

```bash
./render.sh generated/<file>.html
```

The default output is a `1080x1080` PNG next to the HTML file:

```text
generated/<file>.png
```

To render a different size, pass width and height:

```bash
./render.sh generated/<file>.html 1080 1920
```

You can also use the npm script directly:

```bash
npm run render -- generated/<file>.html
```

## Captions

Ask for a caption when you want posting copy:

```text
Include a caption.
```

Caption files are plain text and should be saved as:

```text
generated/<slug>-caption.txt
```

The caption system reads:

- `skills/brand-system/voice.md`
- `skills/brand-system/examples.md`
- `skills/caption/SKILL.md`

Typical caption rules:

- Use concrete details: dates, times, deadlines, links, names, and outcomes.
- Use the WAT.ai voice: enthusiastic, accessible, student-friendly.
- Use no hashtag block.
- Avoid vague hype and corporate language.
- Use emoji density based on post type.
- Keep most captions around 50 to 120 words.

## Reviewing output

Before posting, check:

- The PNG exists and matches the intended size.
- The main message is readable in a small Instagram feed preview.
- The WAT.ai logo appears bottom-right.
- Partner logos render correctly and are not stretched.
- Metadata is monospace.
- Gold is restrained.
- The background motif matches the content type.
- No text overlaps.
- The caption has concrete details and no hashtag block.
- Dates, times, rooms, links, and names are correct.

## Troubleshooting

### `./render.sh` says dependencies are missing

Run:

```bash
npm install
```

Then try rendering again.

### The PNG renders but a logo is missing

Check that the path in the generated HTML starts with `../assets/`, not
`../../assets/`, when the HTML file is in `generated/`.

Also confirm that the logo exists in `assets/logos/`.

### The output image is blank or cropped incorrectly

Confirm that:

- The HTML file exists.
- The canvas is exactly the intended size.
- The render command uses the same width and height as the design.
- The page body and `.canvas` dimensions match the render size.

For a square post, use:

```bash
./render.sh generated/<file>.html 1080 1080
```

For a story, use:

```bash
./render.sh generated/<file>.html 1080 1920
```

### Text overlaps or feels too small

Regenerate or edit the HTML with less copy. For alumni Q&A slides, keep one
question per slide and split long answers. For standard posts, move supporting
details into the caption instead of forcing them into the image.

### A prompt produces the wrong visual style

Be more explicit about the post category and motif:

```text
Use the grid motif because this is an application deadline post.
```

or:

```text
Use the constellation motif because this is an alumni spotlight.
```

### A caption is too generic

Add concrete details to the prompt:

- Who is involved.
- What the event, role, or program is.
- Date and time.
- Location or platform.
- Deadline.
- Application or signup URL.
- Who should apply or attend.

## Maintenance notes

Update the brand system before generating new posts if WAT.ai's identity
changes.

Common updates:

- Colors: edit `skills/brand-system/tokens.md`.
- Fonts: update `assets/fonts/` and the template `@font-face` rules.
- New post category: update `CLAUDE.md` and `skills/brand-system/motifs.md`.
- Caption voice: update `skills/brand-system/voice.md` and add examples in
  `skills/brand-system/examples.md`.
- External logos: add files under `assets/logos/` and update
  `skills/brand-system/logo-assets.md`.

Keep generated outputs out of source-of-truth documentation. Manuals, skills,
brand-system files, templates, and assets should explain how future outputs are
made.

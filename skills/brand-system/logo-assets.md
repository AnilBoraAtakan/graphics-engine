# WAT.ai Logo Asset Manifest

Use this manifest when a prompt names an external organization, company,
accelerator, school, sponsor, collaborator, affiliation, or alumni workplace.
The generator should look for these files before rendering. If a listed file is
missing, include a clear HTML comment placeholder and report the missing filename
after generation.

Place organization files in `/assets/logos/`. Prefer SVG, then transparent PNG.
Use the written WAT.ai logo from `/assets/logo.svg`.

## Required WAT.ai asset

| Display name | File name | Notes |
| ------------ | --------- | ----- |
| WAT.ai written logo | `assets/logo.svg` | Main brand logo. In generated HTML this is referenced as `../assets/logo.svg`. This must be the written logo asset, not typed text. |

## Common external logos

| Display name | Match names in prompts | File name |
| ------------ | ---------------------- | --------- |
| OpenAI | `OpenAI`, `open ai`, `ChatGPT`, `GPT` | `openai.svg` |
| Y Combinator | `YC`, `Y Combinator`, `Y-Combinator` | `y-combinator.svg` |
| MIT | `MIT`, `Massachusetts Institute of Technology` | `mit.svg` |
| University of Waterloo | `UW`, `Waterloo`, `University of Waterloo`, `UWaterloo` | `uwaterloo.svg` |
| Google | `Google`, `Google AI`, `Google DeepMind` | `google.svg` |
| Google DeepMind | `DeepMind`, `Google DeepMind` | `google-deepmind.svg` |
| NVIDIA | `NVIDIA`, `Nvidia` | `nvidia.svg` |
| Microsoft | `Microsoft`, `Microsoft AI`, `Azure` | `microsoft.svg` |
| Meta | `Meta`, `Meta AI`, `Facebook AI` | `meta.svg` |
| Anthropic | `Anthropic`, `Claude` | `anthropic.svg` |
| Cohere | `Cohere` | `cohere.svg` |
| Unsloth AI | `Unsloth`, `Unsloth AI` | `unsloth.svg` |
| Hugging Face | `Hugging Face`, `HuggingFace` | `hugging-face.svg` |
| Vector Institute | `Vector Institute`, `Vector` | `vector-institute.svg` |
| Communitech | `Communitech` | `communitech.svg` |
| Velocity | `Velocity`, `Velocity Waterloo` | `velocity.svg` |

## Alumni spotlight logo rules

Alumni posts use logos differently from event and application posts.

### Cover slide

- The current workplace logo may appear inside the right-side identity block,
  directly above or beside the role line.
- Keep the workplace logo white or monochrome on black.
- Size the workplace logo to feel like a supporting identity mark, not a second
  headline. On a 1080 square cover, use roughly 52 to 74px height.
- WAT.ai stays in the bottom-right brand position. On the cover slide only, it
  may sit inside a thin, low-contrast rectangular brand frame if matching the
  alumni example style.
- Do not place partner logos in the bottom-left brand bar on alumni cover slides
  unless the post is explicitly sponsor-related.

### Q&A slide

- Use the alumni headshot as a circular avatar in the top-left header.
- The workplace logo is usually omitted on Q&A slides unless the content is
  directly about that organization.
- WAT.ai stays bottom-right without competing with the question or answer copy.

## Naming rules

- Use lowercase kebab-case filenames.
- Keep the organization name recognizable in the filename.
- Do not include spaces, parentheses, dates, or version suffixes unless there are
  multiple official variants.
- If both dark and light variants are needed, use `name-light.svg` and
  `name-dark.svg`; default to the light or white version on WAT.ai black graphics.

## Placement rules

- Event, workshop, and sponsor posts: put partner logos in the bottom-left brand
  bar by default.
- Alumni cover posts: put the current company logo in the identity block near
  the role line.
- Direct affiliation line: a single logo may sit near the relevant text if it
  does not compete with the hero.
- Do not exceed three partner logos on a 1080 square post.
- Keep partner logos monochrome or official single-color where possible.

## Missing logo behavior

If a prompt requires a logo and the file is missing, leave this exact style of
comment in the generated HTML:

```html
<!-- Missing logo: assets/logos/openai.svg -->
```

Then report the missing filename after generation.

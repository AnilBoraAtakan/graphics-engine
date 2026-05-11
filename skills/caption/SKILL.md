# Skill: caption

Generates an Instagram caption that matches the WAT.ai voice for the post's category.

---

## When to invoke

Any time a caption is needed — always paired with (or after) the instagram-post skill
when the prompt asks for a full post.

---

## Pre-conditions

Before writing a single word of caption copy, confirm you have read **both**:

1. `skills/brand-system/voice.md` — the tone table, standard shape, recurring phrases,
   and the "things this voice does not do" list.
2. `skills/brand-system/examples.md` — the three annotated real captions.

If you have not read them this invocation, read them now.

---

## Workflow

1. **Identify the post category** (same as the graphic skill):
   - Workshop / learning / event
   - Application / deadline / role recruitment (specific)
   - Application / broad student recruitment
   - Alumni / spotlight
   - Technical event / collab
   - Recap / wrap-up

2. **Look up energy and emoji density** from the tone table in `voice.md`:

   | Category                     | Energy  | Emoji density |
   |------------------------------|---------|---------------|
   | Broad student recruitment    | High    | 4–8           |
   | Specific role recruitment    | Medium  | 0–2           |
   | Technical event / collab     | Medium  | 0–1           |
   | Alumni / spotlight           | Medium  | 0–2           |
   | Workshop / educational       | Medium  | 0–2           |
   | Recap / wrap-up              | Warm    | 2–4           |

3. **Match the closest annotated example** in `examples.md`:
   - Workshop → no annotated example yet; default to medium-energy, light-emoji
     (closer to Example 1 style than Example 3)
   - Specific role → Example 1 (TPM)
   - Technical collab → Example 2 (Unsloth)
   - Broad recruitment → Example 3 (Core Member)

4. **Draft the caption** following the standard shape:
   ```
   [Opener]   We're excited to … / WAT.ai is excited to … / ALL-CAPS hook (high-energy only)
   [Body]     1–3 sentences. Concrete details: dates, names, durations, what's covered.
   [CTA]      Link + (link in bio) where appropriate.
   [Closer]   Benefit-focused or encouragement. Optional.
   ```
   Reuse the recurring phrases from `voice.md` where they fit naturally.

5. **Check against "things this voice does not do"** (from `voice.md`):
   - No hashtag blocks
   - No marketing-deck language ("leverage", "synergy", "next-generation", etc.)
   - No vague hype — every caption needs concrete details
   - No cold corporate tone — "we", not "the organization"

6. **Write the caption** to `generated/<slug>-caption.txt`.

---

## Output format

Plain text. No markdown formatting. No hashtags at the end. 50–120 words typical.

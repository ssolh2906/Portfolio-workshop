# Website Color Set — Pantone Serenity

**Anchor color:** Pantone Serenity `#92A8D1` (HSL 214° 42% 70%)

---

## Color Roles

### Primary
Derived directly from Pantone Serenity. Used for main interactive elements: buttons, links, focused inputs, progress bars.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#C5D5EA` | 214° 45% 84% | Hover backgrounds, tinted containers |
| Default | `#92A8D1` | 214° 42% 70% | Buttons, links, active states |
| Dark | `#5C7DAF` | 214° 35% 52% | Pressed states, strong emphasis |

---

### Secondary
Analogous shift to blue-violet — close enough to feel related, distinct enough to differentiate.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#BDB8E0` | 245° 35% 80% | Subtle tags, secondary hover fills |
| Default | `#8C86C2` | 245° 32% 64% | Secondary buttons, badges, icons |
| Dark | `#5F58A0` | 245° 29% 49% | Secondary pressed states, deep labels |

---

### Accent
Warm coral — the complementary opposite of Serenity's cool blue. Used sparingly for CTAs, notifications, highlights.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#F5C4B2` | 18° 78% 83% | Toast backgrounds, chip fills |
| Default | `#E8845A` | 18° 73% 63% | Primary CTA, alert icons, badges |
| Dark | `#C4522A` | 18° 66% 47% | Hover/active on accent elements |

---

### Background
Page-level canvas. Light mode reads as near-white with a whisper of blue; dark mode as deep navy.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#F4F6FB` | 220° 36% 97% | Main page background (light mode) |
| Dark | `#14192B` | 228° 36% 12% | Main page background (dark mode) |

---

### Surface
Raised layers on top of the background — cards, modals, sidebars, dropdowns.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#FFFFFF` | — | Cards, panels (light mode) |
| Light Elevated | `#EBF0F8` | 216° 38% 94% | Nested cards, code blocks (light) |
| Dark | `#1E2438` | 228° 30% 17% | Cards, panels (dark mode) |
| Dark Elevated | `#262D45` | 228° 28% 21% | Nested cards, dropdowns (dark) |

---

### Text
Readable against both surface variants. Maintains WCAG AA contrast against all surface colors.

| Variant | Hex | HSL | Contrast (on Light Surface) | Usage |
|---------|-----|-----|-----------------------------|-------|
| Primary Light | `#1A2238` | 228° 38% 16% | 14.2 : 1 | Body copy, headings (light mode) |
| Secondary Light | `#4A5870` | 218° 21% 37% | 7.1 : 1 | Captions, labels, muted (light mode) |
| Disabled Light | `#8E9BAD` | 214° 16% 62% | 3.5 : 1 | Placeholder text, disabled (light mode) |
| Primary Dark | `#E8EDF8` | 220° 48% 94% | 13.8 : 1 (on dark surface) | Body copy, headings (dark mode) |
| Secondary Dark | `#8FA4C0` | 214° 29% 65% | 6.4 : 1 (on dark surface) | Captions, labels, muted (dark mode) |
| Disabled Dark | `#4E5D72` | 215° 19% 38% | 3.1 : 1 (on dark surface) | Placeholder, disabled (dark mode) |

---

### Border / Divider
Subtle structural lines and outlines.

| Variant | Hex | HSL | Usage |
|---------|-----|-----|-------|
| Light | `#D0DAE8` | 214° 29% 86% | Dividers, input outlines (light mode) |
| Light Strong | `#92A8D1` | 214° 42% 70% | Focused input rings, card borders (light) |
| Dark | `#2C3650` | 222° 28% 24% | Dividers, outlines (dark mode) |
| Dark Strong | `#5C7DAF` | 214° 35% 52% | Focused rings, active borders (dark) |

---

## Full Palette Reference

```
Pantone Serenity Anchor
  #92A8D1  HSL(214, 42%, 70%)

Primary
  Light    #C5D5EA  HSL(214, 45%, 84%)
  Default  #92A8D1  HSL(214, 42%, 70%)
  Dark     #5C7DAF  HSL(214, 35%, 52%)

Secondary
  Light    #BDB8E0  HSL(245, 35%, 80%)
  Default  #8C86C2  HSL(245, 32%, 64%)
  Dark     #5F58A0  HSL(245, 29%, 49%)

Accent
  Light    #F5C4B2  HSL(18, 78%, 83%)
  Default  #E8845A  HSL(18, 73%, 63%)
  Dark     #C4522A  HSL(18, 66%, 47%)

Background
  Light    #F4F6FB  HSL(220, 36%, 97%)
  Dark     #14192B  HSL(228, 36%, 12%)

Surface
  Light            #FFFFFF
  Light Elevated   #EBF0F8  HSL(216, 38%, 94%)
  Dark             #1E2438  HSL(228, 30%, 17%)
  Dark Elevated    #262D45  HSL(228, 28%, 21%)

Text
  Primary Light    #1A2238  HSL(228, 38%, 16%)
  Secondary Light  #4A5870  HSL(218, 21%, 37%)
  Disabled Light   #8E9BAD  HSL(214, 16%, 62%)
  Primary Dark     #E8EDF8  HSL(220, 48%, 94%)
  Secondary Dark   #8FA4C0  HSL(214, 29%, 65%)
  Disabled Dark    #4E5D72  HSL(215, 19%, 38%)

Border
  Light            #D0DAE8  HSL(214, 29%, 86%)
  Light Strong     #92A8D1  HSL(214, 42%, 70%)
  Dark             #2C3650  HSL(222, 28%, 24%)
  Dark Strong      #5C7DAF  HSL(214, 35%, 52%)
```

---

## CSS Custom Properties

```css
:root {
  /* Primary */
  --color-primary-light:   #C5D5EA;
  --color-primary:         #92A8D1;
  --color-primary-dark:    #5C7DAF;

  /* Secondary */
  --color-secondary-light: #BDB8E0;
  --color-secondary:       #8C86C2;
  --color-secondary-dark:  #5F58A0;

  /* Accent */
  --color-accent-light:    #F5C4B2;
  --color-accent:          #E8845A;
  --color-accent-dark:     #C4522A;

  /* Background */
  --color-bg:              #F4F6FB;
  --color-surface:         #FFFFFF;
  --color-surface-raised:  #EBF0F8;

  /* Text */
  --color-text-primary:    #1A2238;
  --color-text-secondary:  #4A5870;
  --color-text-disabled:   #8E9BAD;

  /* Border */
  --color-border:          #D0DAE8;
  --color-border-strong:   #92A8D1;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:              #14192B;
    --color-surface:         #1E2438;
    --color-surface-raised:  #262D45;

    --color-text-primary:    #E8EDF8;
    --color-text-secondary:  #8FA4C0;
    --color-text-disabled:   #4E5D72;

    --color-border:          #2C3650;
    --color-border-strong:   #5C7DAF;
  }
}
```

---

## Design Notes

- **Harmony method:** All colors share the 214° (blue) hue family, with Secondary shifted +31° to blue-violet and Accent flipped 180° to warm coral for contrast. Saturation is kept moderate (28–45%) to avoid visual fatigue.
- **Accessibility:** Primary and Secondary text colors exceed WCAG AA (4.5:1) on all surface variants. Disabled colors intentionally fall below AA — they signal non-interactive state.
- **Accent restraint:** Use `#E8845A` only for one primary CTA per view or for urgent states (errors, notifications). Overuse competes with the calm Serenity palette.
- **Dark mode shift:** The dark palette deepens the hue angle slightly (214° → 228°) for the background/surface tones to give a richer navy feel rather than a flat dark grey.

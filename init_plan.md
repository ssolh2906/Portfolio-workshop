This project is my portfolio. 

## Tech stack
Framework: Next.js 15
TypeScript
Tailwind CSS v4
Framer Motion
Recharts
Lucide React
Vercel 

## Structure

```text
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # Main
│   ├── work/page.tsx
│   └── api/
│       └── *.py / *.ts   # As needed
│
├── components/
│   ├── ui/               # Components
│   ├── charts/           # Bioinformatics portfolio can be charts heavy.
│   └── *.tsx         
│
├── public/               # Static assets (images, resume PDF)
├── content/              # Data (csv, json, ts … )
├── scripts/              # If you have python scripts
├── lib/utils.ts
└── styles/globals.css
```

## Plan

### Setup
1. `git init`
2. Add `.gitkeep` to all empty folders (`public/`, `content/`, `scripts/`, `components/ui/`, `components/charts/`)
3. Add README.md and write how to run the project. 

### Main page sections (in order)
1. **Hero** — Name, 1-line intro, CTA buttons (Resume / Contact)
2. **Links** — GitHub, LinkedIn, Email icons
3. **Skills** — Simple badge list (no proficiency levels)
4. **Featured Project** — 1 project card (links to /work)

Each project has its own page under /work.

## Design

Use the color_set.md
Use taste-skill
Design based on Material3 (https://www.figma.com/community/file/1035203688168086460/material-3-design-kit?q_id=a432ca9a-6ef2-4c5a-8b95-c34cd14562ac)

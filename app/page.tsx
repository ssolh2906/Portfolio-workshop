import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const SKILLS = [
  "Python",
  "R",
  "TypeScript",
  "Next.js",
  "React",
  "Pandas",
  "NumPy",
  "SQL",
  "Bioconductor",
  "Bash",
];

const LINKS = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Email", href: "mailto:placeholder@example.com", Icon: Mail },
];

const FEATURED_PROJECT_TAGS = ["Python", "scikit-learn", "Pandas"];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-[60dvh] flex items-center pt-16 pb-12 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              style={{ color: "var(--color-text-primary)" }}
            >
              Your Name
            </h1>

            <p
              className="mt-3 text-base font-mono"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Bioinformatics · Software
            </p>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-[55ch]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Researcher and engineer building tools at the intersection of
              genomics and software.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Resume
              </a>
              <a
                href="mailto:placeholder@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-150 active:scale-[0.98]"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Links ────────────────────────────────────────────── */}
      <section
        id="links"
        className="py-10 px-6 md:px-8 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap gap-8" role="list">
            {LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-150"
                  style={{ color: "var(--color-text-secondary)" }}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-12 px-6 md:px-8 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Skills
          </h2>

          <ul className="flex flex-wrap gap-3" role="list">
            {SKILLS.map((skill) => (
              <li key={skill}>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: "var(--color-surface-raised)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Featured Project ─────────────────────────────────── */}
      <section
        id="featured-project"
        className="py-12 px-6 md:px-8 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Featured Project
          </h2>

          <article
            className="rounded-2xl border p-8 md:p-10 max-w-2xl"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              Gene Expression from Histone Modifications
            </h3>

            <p
              className="leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Predicted RNA-seq expression from four histone ChIP-seq marks
              across 27,251 human genes. Best model: Gradient Boosting,
              R² = 0.58, Pearson r = 0.76.
            </p>

            <ul className="flex flex-wrap gap-2 mb-8" role="list">
              {FEATURED_PROJECT_TAGS.map((tag) => (
                <li key={tag}>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary-dark)",
                    }}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/work/predicting-gene-expression"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 hover:opacity-70"
              style={{ color: "var(--color-primary)" }}
            >
              View project
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

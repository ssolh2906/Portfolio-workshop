export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero">
        <h1>Your Name</h1>
        <p>One-line intro placeholder.</p>
        <div>
          <a href="/resume.pdf">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      {/* Links */}
      <section id="links">
        <a href="https://github.com" aria-label="GitHub">GitHub icon</a>
        <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn icon</a>
        <a href="mailto:placeholder@example.com" aria-label="Email">Email icon</a>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill A</li>
          <li>Skill B</li>
          <li>Skill C</li>
        </ul>
      </section>

      {/* Featured Project */}
      <section id="featured-project">
        <h2>Featured Project</h2>
        <div>
          <h3>Project Title Placeholder</h3>
          <p>Short project description placeholder.</p>
          <a href="/work">See all work →</a>
        </div>
      </section>
    </main>
  );
}

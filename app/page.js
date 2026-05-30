export const metadata = {
  title: "About | StrengthInMen",
  description:
    "StrengthInMen was built by a father who hit rock bottom after divorce — anxiety, depression, betrayal, and feeling completely lost. This is his story, and why no man should have to walk it alone.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Rebuilding After the Storm — The Story Behind StrengthInMen",
    description:
      "A father's story of hitting rock bottom after divorce, and building StrengthInMen so no man has to walk that path alone.",
    url: "https://www.strengthinmen.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-shell" aria-label="About StrengthInMen">

      {/* ── NAV ── */}
      <header className="site-nav" role="banner">
        <a className="nav-brand" href="/">StrengthInMen</a>
        <nav aria-label="Site navigation">
          <a className="nav-link" href="https://blog.strengthinmen.com" rel="noopener noreferrer">Blog</a>
          <a className="nav-link" href="/reset">21-Day Reset</a>
          <a className="nav-link nav-cta" href="https://apps.apple.com/us/app/strengthinmen/id6747904090" rel="noopener noreferrer">Get the App</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-eyebrow">The Story Behind StrengthInMen</div>
        <h1 id="about-hero-heading">Rebuilding After the Storm</h1>
        <p className="about-hero-sub">
          This wasn't built from theory. It was built from rock bottom.
        </p>
      </section>

      {/* ── STORY ── */}
      <article className="about-story" aria-label="Founder story">

        <p className="about-lead">
          There was a time when getting out of bed felt impossible.
        </p>

        <p>
          Drowning in anxiety. Weighed down by depression. Completely lost in
          the chaos of a broken marriage. Every day felt like a battle. I was a
          father — trying to be there for my kids — but trapped in a marriage
          that made me feel small and worthless.
        </p>

        <p>
          Walking on eggshells. Never knowing what would trigger the next blow
          up. Always trying to fix things, but nothing was ever enough. Slowly,
          I started to believe I was the problem. That I wasn't good enough.
        </p>

        <p>
          Then came the affair. The betrayal shattered the last remnants of my
          self-worth. I lost myself completely. I turned to substances to numb
          the pain — they only added to the chaos. My body was falling apart.
          My mind felt foggy, unfocused. I couldn't make simple decisions
          without feeling overwhelmed.
        </p>

        <p>
          And through all of it, I was trying to be a father. Trying to be
          strong for my kids. But I was barely holding it together.
        </p>

        <blockquote className="about-quote">
          "I hit rock bottom. And it wasn't until I looked at my children —
          innocent, trusting, dependent on me — that something inside me began
          to shift."
        </blockquote>

        <p>
          They deserved more than a broken, distracted father. They deserved
          someone present. Someone strong. Someone who could lead them through
          life's challenges. I needed to become that person — not just for
          them, but for myself.
        </p>

        <p>
          It wasn't easy. It took time, patience, and a lot of hard work. But
          slowly, I began to rebuild. I started with small things — journaling
          my pain, confronting my emotions, taking care of my body. I cut out
          the habits that kept me numb. I looked for moments of peace where I
          could find them. With each day, the fog lifted just a little more.
        </p>

        <p>
          I found help in therapy. In conversations with other men who had been
          through similar struggles. It wasn't the big moments that turned
          things around — it was the small, daily victories. And eventually I
          realized I had a choice: stay stuck in the past, or fight for a
          future where I was whole again.
        </p>

        <div className="about-divider" aria-hidden="true" />

        <h2>Why StrengthInMen Exists</h2>

        <p>
          StrengthInMen was born from that fight. I realized no man should
          have to walk this path alone. We all have our own battles — healing
          from a broken marriage, overcoming mental health struggles, trying to
          find motivation in a world that feels overwhelming. We need a place
          where we can be real. Where we don't have to hide our struggles to
          appear strong.
        </p>

        <p>
          I'm sharing my story because I know there are men out there who feel
          exactly the way I once did — lost, broken, and alone.
        </p>

        <p className="about-direct">
          If that's you: you are not alone. You are stronger than you think.
          And you have the power to rebuild.
        </p>

        <p>
          StrengthInMen is more than a platform. It's a brotherhood. A space
          where men can share their stories, find support, and reclaim the life
          they deserve. Whether you're going through a recent divorce, facing
          mental health challenges, or just feeling completely lost — there is
          a place for you here.
        </p>

        <p className="about-sign">
          Let's rise together.
        </p>

      </article>

      {/* ── CTA BLOCK ── */}
      <section className="about-cta-block" aria-labelledby="about-cta-heading">
        <h2 id="about-cta-heading">Ready to start rebuilding?</h2>
        <div className="about-cta-grid">
          <a
            className="about-cta-card"
            href="/reset"
            aria-label="Get the 21-Day Men's Mental Reset"
          >
            <span className="about-cta-icon">📋</span>
            <strong>21-Day Reset</strong>
            <p>21 days of structure, clarity, and momentum. $9.</p>
            <span className="about-cta-link">Get started →</span>
          </a>
          <a
            className="about-cta-card"
            href="https://apps.apple.com/us/app/strengthinmen/id6747904090"
            rel="noopener noreferrer"
            aria-label="Download the StrengthInMen iOS app"
          >
            <span className="about-cta-icon">📱</span>
            <strong>iOS App</strong>
            <p>Daily structure, mood tracking, and guided journaling. Free.</p>
            <span className="about-cta-link">Download →</span>
          </a>
          <a
            className="about-cta-card"
            href="https://blog.strengthinmen.com"
            rel="noopener noreferrer"
            aria-label="Read the StrengthInMen blog"
          >
            <span className="about-cta-icon">✍️</span>
            <strong>Blog</strong>
            <p>Real talk for men rebuilding after divorce.</p>
            <span className="about-cta-link">Read →</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-brand">StrengthInMen</div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="https://blog.strengthinmen.com" rel="noopener noreferrer">Blog</a>
          <a href="/reset">21-Day Reset</a>
          <a href="https://apps.apple.com/us/app/strengthinmen/id6747904090" rel="noopener noreferrer">iOS App</a>
          <a href="https://www.tiktok.com/@strength.in.men7" rel="noopener noreferrer">TikTok</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} StrengthInMen LLC · Built for men rebuilding after divorce.
        </p>
      </footer>

    </main>
  );
}

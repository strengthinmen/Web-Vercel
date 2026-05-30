// This is a React Server Component — fetch runs on the server at build/request time.
// Blog posts are baked into the HTML, which is great for SEO and performance.

async function getBlogPosts() {
  try {
    const res = await fetch(
      "https://blog.strengthinmen.com/feeds/posts/default?alt=json&max-results=3",
      { next: { revalidate: 3600 } } // re-fetch every hour
    );
    if (!res.ok) return [];
    const data = await res.json();
    const entries = data?.feed?.entry ?? [];
    return entries.map((entry) => {
      // Find the alternate (html) link
      const link = entry.link?.find((l) => l.rel === "alternate")?.href ?? "#";
      const title = entry.title?.$t ?? "Untitled";
      const published = entry.published?.$t
        ? new Date(entry.published.$t).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : "";
      // Strip HTML tags from summary
      const rawSummary = entry.summary?.$t ?? "";
      const summary = rawSummary.replace(/<[^>]+>/g, "").slice(0, 120) + "…";
      return { title, link, published, summary };
    });
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className="site-shell" aria-label="StrengthInMen homepage">

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header className="site-nav" role="banner">
        <a className="nav-brand" href="/">StrengthInMen</a>
        <nav aria-label="Site navigation">
          <a className="nav-link" href="https://blog.strengthinmen.com" rel="noopener noreferrer">Blog</a>
          <a className="nav-link" href="/reset">21-Day Reset</a>
          <a className="nav-link nav-cta" href="https://apps.apple.com/us/app/strengthinmen/id6747904090" rel="noopener noreferrer">Get the App</a>
        </nav>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="eyebrow" role="text">StrengthInMen</div>
        <h1 id="hero-heading">
          If you feel like your life fell apart after divorce…
          <br />This is where you rebuild it.
        </h1>
        <p className="hero-copy">
          Divorce. Burnout. Feeling lost and isolated. StrengthInMen gives men
          the structure, momentum, and daily tools to start rebuilding their
          lives with real purpose.
        </p>
        <p className="authority">Built by a father who rebuilt his life after divorce</p>
        <nav className="hero-actions" aria-label="Primary actions">
          <a
            className="btn btn-primary"
            href="https://apps.apple.com/us/app/strengthinmen/id6747904090"
            rel="noopener noreferrer"
            aria-label="Download the StrengthInMen app on the App Store"
          >
            Download the App
          </a>
          <a
            className="btn btn-secondary"
            href="/reset"
            aria-label="Learn about the 21-Day Men's Mental Reset"
          >
            Start Your 21-Day Reset
          </a>
        </nav>
        <p className="sub-note">Free to download · iOS app</p>
      </section>

      {/* ── ORIGIN STORY ────────────────────────────────────────────────── */}
      <section className="section card" aria-labelledby="story-heading">
        <h2 id="story-heading">This wasn't built from theory.</h2>
        <p>
          StrengthInMen was built after hitting the kind of low point many men
          keep hidden: divorce, anxiety, isolation, and feeling completely lost.
        </p>
        <p>
          This isn't about fake positivity or toxic hustle. It's about helping
          men who are struggling after divorce get their footing back with real
          structure and honest forward momentum.
        </p>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="audience-heading">
        <h2 id="audience-heading">
          If you're a man going through or recovering from divorce:
        </h2>
        <ul className="bullets">
          <li>Recently divorced or currently going through it</li>
          <li>Feeling lost, stuck, or directionless as a man</li>
          <li>Struggling with isolation and motivation after separation</li>
          <li>Trying to rebuild your identity and daily routine</li>
          <li>Looking for support without judgment</li>
        </ul>
        <p className="highlight-text">You're exactly who this is for.</p>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="features-heading">
        <h2 id="features-heading">
          Simple tools that help men stop drifting after divorce.
        </h2>
        <div className="grid" role="list">
          <article className="card" role="listitem">
            <h3>Daily Structure for Men</h3>
            <p>Clear direction when your mind feels chaotic and overwhelmed.</p>
          </article>
          <article className="card" role="listitem">
            <h3>Mood Tracking</h3>
            <p>See your emotional patterns instead of guessing how you're really doing day to day.</p>
          </article>
          <article className="card" role="listitem">
            <h3>Guided Journaling for Men</h3>
            <p>Process what's going on instead of bottling it up. Built for men who don't normally journal.</p>
          </article>
          <article className="card" role="listitem">
            <h3>Honest Motivation</h3>
            <p>No fake hype. Just real forward movement, one day at a time.</p>
          </article>
        </div>
      </section>

      {/* ── BLOG PREVIEW ────────────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="section" aria-labelledby="blog-heading">
          <h2 id="blog-heading">From the Blog</h2>
          <p className="section-sub">Real talk for men rebuilding after divorce.</p>
          <div className="blog-grid">
            {posts.map((post) => (
              <a
                key={post.link}
                className="blog-card"
                href={post.link}
                rel="noopener noreferrer"
                aria-label={`Read: ${post.title}`}
              >
                <span className="blog-date">{post.published}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <span className="blog-read-more">Read more →</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              className="btn btn-secondary"
              href="https://blog.strengthinmen.com"
              rel="noopener noreferrer"
            >
              View all posts
            </a>
          </div>
        </section>
      )}

      {/* ── CTA: GUMROAD ────────────────────────────────────────────────── */}
      <section className="section highlight" aria-labelledby="reset-heading">
        <h2 id="reset-heading">Start Your Men's Mental Reset Today</h2>
        <p>
          21 days of structure, clarity, and momentum — designed specifically
          for men rebuilding after divorce or a major life setback.
        </p>
        <a
          className="btn btn-primary"
          href="/reset"
          aria-label="Learn about the 21-Day Men's Mental Reset guide"
        >
          Get the 21-Day Reset — $9
        </a>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section final" aria-labelledby="final-heading">
        <h2 id="final-heading">You don't have to rebuild your life alone.</h2>
        <p>
          Join men who are finding their footing again after divorce with daily
          tools built for exactly where you are right now.
        </p>
        <a
          className="btn btn-primary"
          href="https://apps.apple.com/us/app/strengthinmen/id6747904090"
          rel="noopener noreferrer"
          aria-label="Download StrengthInMen free on the App Store"
        >
          Download the App — Free
        </a>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-brand">StrengthInMen</div>
        <nav className="footer-links" aria-label="Footer navigation">
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

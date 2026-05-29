// Optional: page-level metadata override (inherits from layout.js by default)
// Uncomment if you want the homepage to have a slightly different title/description:
//
// export const metadata = {
//   title: "Home",
//   description: "StrengthInMen helps men rebuild confidence and find purpose after divorce.",
//   alternates: { canonical: "/" },
// };

export default function Home() {
  return (
    // ── <main> with aria-label helps screen readers and search engines ──────
    <main className="site-shell" aria-label="StrengthInMen homepage">

      {/* ── HERO ── Primary H1 contains target keyword phrase ── */}
      <section className="hero" aria-labelledby="hero-heading">

        {/* "StrengthInMen" as a visible brand mark, not an H1 (H1 is below) */}
        <div className="eyebrow" role="text">StrengthInMen</div>

        {/*
          H1 strategy: lead with the emotional hook men are actually
          searching for, then pivot to the solution.
        */}
        <h1 id="hero-heading">
          If you feel like your life fell apart after divorce…
          <br />This is where you rebuild it.
        </h1>

        <p className="hero-copy">
          Divorce. Burnout. Feeling lost and isolated. StrengthInMen gives men
          the structure, momentum, and daily tools to start rebuilding their
          lives with real purpose.
        </p>

        <p className="authority">
          Built by a father who rebuilt his life after divorce
        </p>

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
            href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
            rel="noopener noreferrer"
            aria-label="Get the 21-Day Men's Mental Reset guide"
          >
            Start Your 21-Day Reset
          </a>
        </nav>

        <p className="sub-note">Free to download · iOS app</p>
      </section>

      {/* ── ORIGIN STORY ── builds E-E-A-T (Experience) for Google ── */}
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

      {/* ── WHO IT'S FOR ── targets "men going through divorce" queries ── */}
      <section className="section" aria-labelledby="audience-heading">
        <h2 id="audience-heading">
          If you're a man going through or recovering from divorce:
        </h2>
        {/*
          Using <ul> with specific, keyword-rich list items.
          These phrases mirror what men actually search.
        */}
        <ul className="bullets">
          <li>Recently divorced or currently going through it</li>
          <li>Feeling lost, stuck, or directionless as a man</li>
          <li>Struggling with isolation and motivation after separation</li>
          <li>Trying to rebuild your identity and daily routine</li>
          <li>Looking for support without judgment</li>
        </ul>
        <p className="highlight-text">You're exactly who this is for.</p>
      </section>

      {/* ── FEATURES ── H3s carry supporting keyword signals ── */}
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
            <p>
              See your emotional patterns instead of guessing how you're really
              doing day to day.
            </p>
          </article>
          <article className="card" role="listitem">
            <h3>Guided Journaling for Men</h3>
            <p>
              Process what's going on instead of bottling it up. Built for men
              who don't normally journal.
            </p>
          </article>
          <article className="card" role="listitem">
            <h3>Honest Motivation</h3>
            <p>No fake hype. Just real forward movement, one day at a time.</p>
          </article>
        </div>
      </section>

      {/* ── CTA: GUMROAD PRODUCT ── */}
      <section className="section highlight" aria-labelledby="reset-heading">
        <h2 id="reset-heading">Start Your Men's Mental Reset Today</h2>
        <p>
          21 days of structure, clarity, and momentum — designed specifically
          for men rebuilding after divorce or a major life setback.
        </p>
        <a
          className="btn btn-primary"
          href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
          rel="noopener noreferrer"
          aria-label="Get the 21-Day Men's Mental Reset guide on Gumroad"
        >
          Get the 21-Day Reset — $9
        </a>
      </section>

      {/* ── FINAL CTA: APP ── */}
      <section className="section final" aria-labelledby="final-heading">
        <h2 id="final-heading">
          You don't have to rebuild your life alone.
        </h2>
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

    </main>
  );
}

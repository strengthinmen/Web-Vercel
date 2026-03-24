export default function Home() {
  return (
    <main className="site-shell">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <section className="hero">
        <div className="eyebrow">StrengthInMen</div>
        <h1>For men rebuilding their lives.</h1>
        <p className="hero-copy">
          Divorce. Burnout. Starting over. StrengthInMen gives you structure,
          momentum, and a place to begin again with purpose.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://apps.apple.com/us/app/strengthinmen/id6747904090"
          >
            Download the App
          </a>
          <a
            className="btn btn-secondary"
            href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
          >
            Start the 21-Day Reset
          </a>
        </div>

        <div className="hero-grid">
          <div className="stat-card">
            <span className="stat-label">Built for</span>
            <strong>Men in rebuild mode</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Focus</span>
            <strong>Structure over empty hype</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Tools</span>
            <strong>Journal, mood, habits, momentum</strong>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="section-header">
          <span className="section-kicker">Why it exists</span>
          <h2>This wasn’t built from theory.</h2>
        </div>

        <div className="story-card">
          <p>
            StrengthInMen was built after hitting the kind of low point many men
            keep hidden: divorce, anxiety, isolation, and the feeling that life
            slipped off the rails.
          </p>
          <p>
            This isn’t about fake positivity. It’s about getting your footing
            back with real structure, honest reflection, and tools that help you
            move forward one day at a time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">What you get</span>
          <h2>Simple tools that help you stop drifting.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Daily structure</h3>
            <p>
              Clear prompts and routines that help you stay grounded when your
              head feels crowded.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Mood tracking</h3>
            <p>
              See your patterns, spot progress, and stop relying on memory when
              everything feels heavy.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Guided journaling</h3>
            <p>
              Put words to what’s happening inside so you can process it instead
              of carrying it.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">04</div>
            <h3>Real motivation</h3>
            <p>
              Not fake hype. Just honest momentum for men trying to rebuild with
              purpose.
            </p>
          </article>
        </div>
      </section>

      <section className="section reset-section">
        <div className="reset-panel">
          <div className="section-header reset-header">
            <span className="section-kicker">Paid offer</span>
            <h2>Start your 21-day reset.</h2>
          </div>

          <p className="reset-copy">
            When you feel stuck, you don’t need more noise. You need a plan. The
            21-Day Reset gives you a starting point for structure, reflection,
            and momentum.
          </p>

          <div className="reset-points">
            <span>21 focused days</span>
            <span>Clear daily direction</span>
            <span>Built for real life</span>
          </div>

          <a
            className="btn btn-primary"
            href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
          >
            Get the 21-Day Reset
          </a>
        </div>
      </section>

      <section className="section final-cta">
        <div className="final-cta-card">
          <span className="section-kicker">Start today</span>
          <h2>You don’t have to rebuild alone.</h2>
          <p>
            Start with the app. Build momentum. Take the next right step.
          </p>
          <a
            className="btn btn-primary"
            href="https://apps.apple.com/us/app/strengthinmen/id6747904090"
          >
            Download the App
          </a>
        </div>
      </section>
    </main>
  );
}

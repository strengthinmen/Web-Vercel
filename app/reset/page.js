export const metadata = {
  title: "21-Day Reset for Men | StrengthInMen",
  description:
    "21 days of structure, clarity, and momentum for men who feel stuck after divorce or a major life setback. One action. One prompt. One win — every day.",
  alternates: { canonical: "/reset" },
  openGraph: {
    title: "REBUILD: The 21-Day Reset for Men Who Feel Stuck",
    description:
      "No fluff. No overwhelm. Just 21 days of simple structure to get your head straight, build momentum, and start feeling like yourself again.",
    url: "https://www.strengthinmen.com/reset",
  },
};

export default function ResetPage() {
  return (
    <main className="reset-shell" aria-label="21-Day Reset landing page">

      {/* ── NAV ── */}
      <header className="site-nav" role="banner">
        <a className="nav-brand" href="/">StrengthInMen</a>
        <nav aria-label="Site navigation">
          <a className="nav-link" href="https://blog.strengthinmen.com" rel="noopener noreferrer">Blog</a>
          <a className="nav-link nav-cta" href="https://apps.apple.com/us/app/strengthinmen/id6747904090" rel="noopener noreferrer">Get the App</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="reset-hero" aria-labelledby="reset-hero-heading">
        <div className="reset-eyebrow">21-Day Program</div>
        <h1 id="reset-hero-heading">
          REBUILD
        </h1>
        <p className="reset-subtitle">The 21-Day Reset for Men Who Feel Stuck</p>
        <p className="reset-hero-copy">
          If your life feels off track right now — this is for you.<br />
          This isn't motivation. <strong>This is structure.</strong>
        </p>
        <a
          className="reset-btn-primary"
          href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
          rel="noopener noreferrer"
          aria-label="Get the 21-Day Reset on Gumroad"
        >
          Start Your Reset Today →
        </a>
        <p className="reset-sub-note">Instant download · PDF · $9</p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="reset-divider" aria-hidden="true">
        <span>21 days. One action. One prompt. One win.</span>
      </div>

      {/* ── WHO IT'S FOR ── */}
      <section className="reset-section" aria-labelledby="who-heading">
        <h2 id="who-heading">Who This Is For</h2>
        <div className="reset-who-grid">
          <div className="reset-who-card">
            <div className="reset-who-icon">⚡</div>
            <p>Men going through divorce or a major life reset</p>
          </div>
          <div className="reset-who-card">
            <div className="reset-who-icon">👨‍👧</div>
            <p>Dads trying to get back on track for themselves and their kids</p>
          </div>
          <div className="reset-who-card">
            <div className="reset-who-icon">🎯</div>
            <p>Guys who feel stuck — but know they're capable of more</p>
          </div>
        </div>
        <p className="reset-built-by">Built by a father rebuilding his own life.</p>
      </section>

      {/* ── WHAT YOU'LL DO ── */}
      <section className="reset-section reset-dark-card" aria-labelledby="what-heading">
        <h2 id="what-heading">What You'll Do Each Day</h2>
        <p className="reset-section-sub">Simple. Focused. Executable.</p>
        <div className="reset-daily-grid">
          <div className="reset-daily-item">
            <span className="reset-daily-num">01</span>
            <div>
              <strong>One Simple Action</strong>
              <p>5–20 minutes. No excuses.</p>
            </div>
          </div>
          <div className="reset-daily-item">
            <span className="reset-daily-num">02</span>
            <div>
              <strong>One Clarity Prompt</strong>
              <p>Forces you to think clearly instead of spinning.</p>
            </div>
          </div>
          <div className="reset-daily-item">
            <span className="reset-daily-num">03</span>
            <div>
              <strong>One Small Win</strong>
              <p>Something you complete that day. Every day.</p>
            </div>
          </div>
        </div>
        <p className="reset-no-fluff">No long reading. No overthinking. Just execution.</p>
      </section>

      {/* ── WHAT THIS FIXES ── */}
      <section className="reset-section" aria-labelledby="fixes-heading">
        <h2 id="fixes-heading">What This Fixes</h2>
        <div className="reset-fixes-grid">
          <div className="reset-fix-card">
            <h3>Your Mind</h3>
            <p>Overthinking, stress, feeling stuck in your own head.</p>
          </div>
          <div className="reset-fix-card">
            <h3>Your Energy</h3>
            <p>Low motivation, no drive, going through the motions.</p>
          </div>
          <div className="reset-fix-card">
            <h3>Your Habits</h3>
            <p>Inconsistency, starting and stopping, never following through.</p>
          </div>
          <div className="reset-fix-card">
            <h3>Your Direction</h3>
            <p>Feeling lost, no purpose, not knowing what you're building toward.</p>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="reset-section reset-dark-card" aria-labelledby="why-heading">
        <h2 id="why-heading">Why This Works</h2>
        <p className="reset-section-sub">Because it's simple — and simple works.</p>
        <p className="reset-why-copy">
          You don't need a complete life overhaul. You need a few small wins stacked daily.
        </p>
        <div className="reset-chain">
          <div className="reset-chain-item">
            <strong>21 days of action</strong>
            <span>→</span>
            <strong>Momentum</strong>
            <span>→</span>
            <strong>Confidence</strong>
            <span>→</span>
            <strong>Change</strong>
          </div>
        </div>
        <p className="reset-why-copy">That's the system.</p>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="reset-section" aria-labelledby="get-heading">
        <h2 id="get-heading">What You Get</h2>
        <ul className="reset-get-list">
          <li>✓ 21 structured daily pages</li>
          <li>✓ Guided prompts — not generic journaling</li>
          <li>✓ A repeatable system you can use anytime life knocks you off track</li>
          <li>✓ Instant PDF download</li>
        </ul>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="reset-final" aria-labelledby="final-cta-heading">
        <h2 id="final-cta-heading">You don't need to fix everything.</h2>
        <p className="reset-final-copy">You just need to start.</p>
        <p className="reset-final-copy">
          If you're ready to stop feeling stuck and start rebuilding:
        </p>
        <a
          className="reset-btn-primary reset-btn-large"
          href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset"
          rel="noopener noreferrer"
          aria-label="Start your 21-Day Reset — get instant access"
        >
          Start Your 21-Day Reset Today →
        </a>
        <p className="reset-sub-note">Instant download · PDF · $9 · No subscription</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-brand">StrengthInMen</div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="https://blog.strengthinmen.com" rel="noopener noreferrer">Blog</a>
          <a href="https://apps.apple.com/us/app/strengthinmen/id6747904090" rel="noopener noreferrer">iOS App</a>
          <a href="https://www.tiktok.com/@strengthinmen" rel="noopener noreferrer">TikTok</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} StrengthInMen LLC · Built for men rebuilding after divorce.
        </p>
      </footer>

    </main>
  );
}

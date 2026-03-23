const pillars = [
  {
    title: 'Structure',
    text: 'Simple tools that help men stay grounded: gratitude, mood tracking, weekly reflection, and habits that actually stick.',
  },
  {
    title: 'Motivation',
    text: 'Quotes, playlists, and content built to help a man keep moving when life feels heavy, lonely, or uncertain.',
  },
  {
    title: 'Rebuild',
    text: 'StrengthInMen is for the man rebuilding after divorce, burnout, setbacks, isolation, or a full life reset.',
  },
];

const features = [
  'Daily motivation and quote library',
  'Gratitude journal',
  'Mood tracker',
  'Habit tracking',
  'Weekly reflection',
  'Curated books, articles, and playlists',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top">StrengthInMen</a>
          <nav className="nav-links">
            <a href="#why">Why</a>
            <a href="#features">Features</a>
            <a href="#mission">Mission</a>
            <a href="#download">Get the App</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">FOR MEN REBUILDING THEIR LIVES</p>
            <h1>Strength, structure, and motivation for the man starting over.</h1>
            <p className="hero-copy">
              StrengthInMen helps men rebuild with practical tools, honest encouragement,
              and content that meets them where they are — after divorce, setbacks,
              loneliness, burnout, or a season that knocked them down.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#download">Download the App</a>
              <a className="button button-secondary" href="#why">Why StrengthInMen Exists</a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="hero-card-label">Built around what men often need most:</p>
            <ul>
              <li>Daily direction</li>
              <li>Emotional steadiness</li>
              <li>Practical self-improvement</li>
              <li>A place to reset and keep going</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container narrow">
          <p className="section-label">WHY STRENGTHINMEN EXISTS</p>
          <h2>This was built from lived experience — not theory.</h2>
          <p>
            StrengthInMen was created for men who feel like life hit them hard and kept
            moving. The man carrying pressure, stress, financial weight, loneliness,
            parenting responsibilities, and the quiet battle of trying to stay strong.
          </p>
          <p>
            This is not fake hype. It is a place for real structure, real encouragement,
            and real momentum. The goal is simple: help men become stronger mentally,
            emotionally, physically, and spiritually — one day at a time.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cards-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="info-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section">
        <div className="container feature-grid">
          <div>
            <p className="section-label">WHAT YOU GET</p>
            <h2>Tools that support real life — not just inspiration.</h2>
            <p>
              The app is designed to help a man reset his mind, stay intentional, and keep
              building. Start small. Stay consistent. Stack wins.
            </p>
          </div>
          <div className="feature-card">
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="mission" className="section section-alt">
        <div className="container narrow center-text">
          <p className="section-label">THE MISSION</p>
          <h2>Help men rebuild with discipline, perspective, and hope.</h2>
          <p>
            StrengthInMen is about helping men move forward with clarity. Better habits.
            Better mindset. Better leadership as fathers, partners, and men.
          </p>
        </div>
      </section>

      <section id="download" className="section cta-section">
        <div className="container cta-card">
          <div>
            <p className="section-label">READY TO START?</p>
            <h2>Download StrengthInMen and begin your rebuild.</h2>
            <p>
              Replace the links below with your App Store link, Android link, Gumroad PDFs,
              email list, or coaching offer.
            </p>
          </div>
          <div className="button-row">
            <a className="button button-primary" href="https://apps.apple.com/" target="_blank" rel="noreferrer">App Store</a>
            <a className="button button-secondary" href="https://strengthinmen.com" target="_blank" rel="noreferrer">Website / Waitlist</a>
          </div>
        </div>
      </section>
    </main>
  );
}

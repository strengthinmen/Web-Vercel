export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>
          For men rebuilding their lives.
        </h1>
        <p style={{ fontSize: "18px", marginTop: "20px", opacity: 0.8 }}>
          Divorce. Burnout. Starting over. This is where you get your structure back.
        </p>
        <div style={{ marginTop: "30px" }}>
          <a href="https://apps.apple.com/us/app/strengthinmen/id6747904090">
            <button style={{ marginRight: "10px", padding: "10px 20px" }}>
              Download the App
            </button>
          </a>
          <a href="https://strengthinmen.gumroad.com/l/21-DayMenMentalReset">
            <button style={{ padding: "10px 20px" }}>
              Start the 21-Day Reset
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

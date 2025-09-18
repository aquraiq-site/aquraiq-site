export default function Hero() {
  const section = {
    textAlign: "center", padding: "96px 24px",
    color: "#fff",
    background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)"
  };
  const h2 = { fontSize: 44, fontWeight: 900, marginBottom: 16 };
  const p = { fontSize: 18, opacity: 0.95, maxWidth: 720, margin: "0 auto" };
  const btn = {
    marginTop: 28, background: "#fff", color: "#2563eb",
    borderRadius: 10, padding: "12px 20px", display: "inline-block",
    fontWeight: 700, textDecoration: "none"
  };

  return (
    <section style={section}>
      <h2 style={h2}>AI-powered Water Intelligence 💧🤖</h2>
      <p style={p}>
        We connect water utilities and AI companies with blockchain transparency and smart analytics.
      </p>
      <div>
        <a href="#ranking" style={btn}>View AI Company Rankings</a>
      </div>
    </section>
  );
}

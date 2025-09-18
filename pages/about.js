// pages/about.js
export default function About() {
  const section = {
    maxWidth: "900px",
    margin: "60px auto",
    padding: "0 24px",
    lineHeight: 1.8,
    color: "#374151",
  };

  const h2 = {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 16,
    color: "#111827",
    textAlign: "center",
  };

  const h3 = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 32,
    marginBottom: 12,
    color: "#2563eb",
  };

  const p = { fontSize: 18, marginBottom: 16 };

  const list = { marginLeft: 20, fontSize: 18 };

  return (
    <section style={section}>
      <h2>About AquraIQ</h2>
      <p style={p}>
        AquraIQ is an AI-powered water intelligence platform bridging water
        utilities and artificial intelligence companies. We leverage blockchain
        for transparency, advanced analytics for decision-making, and
        sustainability metrics to ensure smarter resource management.
      </p>

      <h3>Our Mission 🚀</h3>
      <p style={p}>
        To revolutionize water sustainability by integrating AI and blockchain,
        enabling utilities and industries to optimize water consumption,
        increase efficiency, and reduce environmental impact.
      </p>

      <h3>Our Vision 🌍</h3>
      <p style={p}>
        To become the global standard for AI-driven water intelligence,
        creating a future where every drop of water is tracked, optimized, and
        preserved through cutting-edge technology.
      </p>

      <h3>Core Values 💡</h3>
      <ul style={list}>
        <li><strong>Innovation:</strong> Harnessing AI and blockchain for real-world water solutions.</li>
        <li><strong>Transparency:</strong> Ensuring data integrity with on-chain verifications.</li>
        <li><strong>Sustainability:</strong> Prioritizing ecological balance and resource conservation.</li>
        <li><strong>Collaboration:</strong> Building bridges between water utilities, AI firms, and stakeholders.</li>
        <li><strong>Impact:</strong> Driving measurable change in global water and energy use.</li>
      </ul>
    </section>
  );
}

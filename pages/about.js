// pages/about.js

export default function About() {
  const section = {
    maxWidth: "900px",
    margin: "60px auto",
    padding: "20px",
    lineHeight: 1.8,
    color: "#374151",
    fontSize: "18px",
  };

  const heading = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827",
    textAlign: "center",
  };

  const subheading = {
    fontSize: "24px",
    fontWeight: "600",
    marginTop: "40px",
    marginBottom: "12px",
    color: "#2563eb",
  };

  return (
    <div style={section}>
      <h1 style={heading}>About AquraIQ</h1>
      <p>
        AquraIQ bridges water utilities and AI companies using blockchain transparency,
        advanced analytics, and sustainability metrics. We are committed to building
        trust and efficiency across two of the world’s most critical industries:
        <b> water </b> and <b> artificial intelligence</b>.
      </p>

      <h2 style={subheading}>🌍 Mission</h2>
      <p>
        Our mission is to revolutionize how water utilities and AI enterprises collaborate,
        by providing <b>real-time transparency, verified sustainability data, and AI-powered insights</b>.
        We aim to ensure water resources are used responsibly while enabling AI companies
        to optimize their operations with minimal environmental impact.
      </p>

      <h2 style={subheading}>🚀 Vision</h2>
      <p>
        Our vision is a <b>future where water and AI industries work hand in hand</b> — 
        creating a sustainable, transparent, and data-driven ecosystem. 
        AquraIQ aspires to become the global standard for <b>AI-water accountability</b>, 
        driving innovation in blockchain auditing, intelligent resource allocation,
        and sustainability rankings.
      </p>

      <h2 style={subheading}>💡 Core Values</h2>
      <ul>
        <li><b>Transparency:</b> All data verified on-chain and accessible to stakeholders.</li>
        <li><b>Sustainability:</b> Prioritizing eco-friendly solutions and water stewardship.</li>
        <li><b>Innovation:</b> Driving cutting-edge AI and blockchain integration.</li>
        <li><b>Collaboration:</b> Partnering with global water utilities and AI leaders.</li>
      </ul>
    </div>
  );
}

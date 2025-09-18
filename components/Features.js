export default function Features() {
  const wrap = { maxWidth: 1100, margin: "0 auto", padding: "56px 24px" };
  const h3 = { fontSize: 28, fontWeight: 800, marginBottom: 24, textAlign: "center" };
  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 };
  const card = { background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" };
  const title = { fontWeight: 800, fontSize: 18, marginBottom: 8, color: "#111827" };
  const txt = { color: "#4b5563", lineHeight: 1.6 };

  const list = [
    { t: "Blockchain Transparency", d: "On-chain audit for water usage, pricing and sustainability KPIs." },
    { t: "AI Marketplace", d: "Match water utilities with AI vendors and models based on needs & budget." },
    { t: "Data Unification", d: "Normalize IoT/SCADA and lab data into one analytics layer." },
  ];

  return (
    <section id="features" style={wrap}>
      <h3 style={h3}>Platform Features</h3>
      <div style={grid}>
        {list.map((f, i) => (
          <div key={i} style={card}>
            <div style={title}>{f.t}</div>
            <div style={txt}>{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

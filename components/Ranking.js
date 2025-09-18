export default function Ranking() {
  const wrap = { maxWidth: 1100, margin: "0 auto", padding: "32px 24px" };
  const h3 = { fontSize: 28, fontWeight: 800, marginBottom: 16, textAlign: "center" };
  const tableWrap = { overflowX: "auto", background: "#fff", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" };
  const table = { width: "100%", borderCollapse: "collapse" };
  const th = { textAlign: "left", padding: 14, fontWeight: 800, borderBottom: "1px solid #e5e7eb" };
  const td = { padding: 12, borderBottom: "1px solid #f3f4f6", color: "#374151" };

  // نمونه دیتا – بعداً به API وصل می‌کنیم
  const rows = [
    { rank: 1, name: "BlueQuant AI",  water: "Low",  score: 92 },
    { rank: 2, name: "HydroBrain",    water: "Med",  score: 88 },
    { rank: 3, name: "AquaSense AI",  water: "Low",  score: 85 },
  ];

  return (
    <section id="ranking" style={wrap}>
      <h3 style={h3}>AI Companies – Sustainability Ranking</h3>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>#</th>
              <th style={th}>Company</th>
              <th style={th}>Water Footprint</th>
              <th style={th}>Score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.rank}>
                <td style={td}>{r.rank}</td>
                <td style={td}>{r.name}</td>
                <td style={td}>{r.water}</td>
                <td style={td}>{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ textAlign: "center", marginTop: 12, color: "#6b7280" }}>
        * Demo data. Will be powered by on-chain proofs & verified disclosures.
      </p>
    </section>
  );
}

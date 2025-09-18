export default function Navbar() {
  const nav = {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 32px", background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
    position: "sticky", top: 0, zIndex: 20
  };
  const brand = { fontSize: 22, fontWeight: 800, color: "#2563eb" };
  const ul = { display: "flex", gap: 20, listStyle: "none", margin: 0, padding: 0, fontWeight: 500, color: "#374151" };
  const link = { textDecoration: "none", color: "#374151" };

  return (
    <nav style={nav}>
      <div style={brand}>AquraIQ</div>
      <ul style={ul}>
        <li><a href="#features" style={link}>Features</a></li>
        <li><a href="#ranking" style={link}>Ranking</a></li>
        <li><a href="#about" style={link}>About</a></li>
        <li><a href="#contact" style={link}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default function Footer() {
  const wrap = { background: "#111827", color: "#9ca3af", textAlign: "center", padding: "22px 12px", marginTop: 48 };
  const link = { color: "#93c5fd", textDecoration: "none" };
  return (
    <footer style={wrap} id="contact">
      <p>© {new Date().getFullYear()} AquraIQ — All Rights Reserved.</p>
      <p style={{ marginTop: 6 }}>
        Contact: <a href="mailto:info@aquraiq.com" style={link}>info@aquraiq.com</a>
      </p>
    </footer>
  );
}

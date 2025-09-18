// pages/contact.js
export default function Contact() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>Get in Touch</h1>
      <p>
        For partnerships, investments, or inquiries, please reach out using the form below.
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
        <input type="text" placeholder="Your Name" style={{ padding: "12px", fontSize: "16px" }} />
        <input type="email" placeholder="Your Email" style={{ padding: "12px", fontSize: "16px" }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: "12px", fontSize: "16px" }} />
        <button type="submit" style={{ background: "#2563eb", color: "#fff", padding: "12px", fontSize: "16px", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

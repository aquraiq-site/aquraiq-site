// pages/contact.js

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Get in Touch</h1>
      <p>
        For partnerships, investments, or inquiries, please contact us using the
        form below.
      </p>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input type="text" placeholder="Your Name" style={{ margin: "0.5rem 0", padding: "0.5rem" }} />
        <input type="email" placeholder="Your Email" style={{ margin: "0.5rem 0", padding: "0.5rem" }} />
        <textarea placeholder="Your Message" rows="5" style={{ margin: "0.5rem 0", padding: "0.5rem" }} />
        <button type="submit" style={{ marginTop: "1rem", padding: "0.75rem", background: "#2563eb", color: "#fff", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  const formStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px"
  };

  const btnStyle = {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600"
  };

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Get in Touch</h2>
      <p>For partnerships, investments, or inquiries, contact us below.</p>

      <form 
        action="https://formspree.io/f/your-form-id" 
        method="POST" 
        style={formStyle}
      >
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
        <button type="submit" style={btnStyle}>Send Message</button>
      </form>
    </div>
  );
}

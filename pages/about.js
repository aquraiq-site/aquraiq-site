// pages/about.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "64px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h1>About AquraIQ</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "16px" }}>
          AquraIQ bridges water utilities and AI companies using blockchain transparency,
          advanced analytics, and sustainability metrics.  
          <br /><br />
          Our mission is to create a future where water and AI industries collaborate 
          for a sustainable world. 🌍💧🤖
        </p>
      </main>
      <Footer />
    </>
  );
}

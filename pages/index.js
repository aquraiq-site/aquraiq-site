// pages/index.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Ranking from "../components/Ranking";
import Footer from "../components/Footer";

export default function Home() {
  const pageStyle = { background: "#f7fafc", color: "#111827", minHeight: "100vh" };
  return (
    <div style={pageStyle}>
      <Navbar />
      <Hero />
      <Features />
      <Ranking />
      <Footer />
    </div>
  );
}

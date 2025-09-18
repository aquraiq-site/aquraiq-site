// pages/_app.js
import Layout from "../components/Layout";
import "../styles/globals.css"; // بعداً درست می‌کنیم

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

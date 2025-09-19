// pages/_app.js

import Layout from "../components/Layout";
import "../styles/globals.css"; // گلوبال استایل

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

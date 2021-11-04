import "../styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Northwestern Libraries Design System</title>
        <meta
          name="description"
          content="Northwestern University Libraries Design System"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;

import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Head>
          <title>Foto App</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          ></meta>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}

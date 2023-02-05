import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import { globalUsers } from "@/store";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState("loggedInUser", {
    defaultValue: "rainerzufall@mail.com",
  });

  if (loggedInUser === "peterlustig@mail.com")
    setLoggedInUser("rainerzufall@mail.com");

  // if (loggedInUser === "rainerzufall@mail.com")
  //   setLoggedInUser("peterlustig@mail.com");

  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 1000,
      }}
    >
      <GlobalStyle />
      <Head>
        <title>Foto App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

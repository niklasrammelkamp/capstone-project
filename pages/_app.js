import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { globalUsers } from "@/store";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState("loggedInUser", {
    defaultValue: "rainerzufall@mail.com",
  });

  if (loggedInUser === "peterlustig@mail.com")
    setLoggedInUser("rainerzufall@mail.com");

  // if (loggedInUser === "rainerzufall@mail.com")
  //   setLoggedInUser("peterlustig@mail.com");

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Foto App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

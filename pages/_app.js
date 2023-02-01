import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { globalUsers } from "@/store";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState("loggedInUser", {
    defaultValue: "peterlustig@mail.com",
  });

  console.log(loggedInUser);

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

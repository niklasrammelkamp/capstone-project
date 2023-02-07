import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState("loggedInUser", {
    defaultValue: "rainerzufall@mail.com",
  });

  // fetching the loggedInUser
  const {
    data: user,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/user/${loggedInUser}`, fetcher);

  if (isLoading) return <p>is loading</p>;
  if (error) return <p>error</p>;

  // for reloading the user
  function reloadUser() {
    mutate();
  }

  if (loggedInUser === "peterlustig@mail.com")
    setLoggedInUser("rainerzufall@mail.com");

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <Head>
        <title>Foto App</title>
      </Head>
      <Layout>
        <Component {...pageProps} loggedInUser={user} reloadUser={reloadUser} />
      </Layout>
    </SWRConfig>
  );
}

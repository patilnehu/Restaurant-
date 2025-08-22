import Head from "next/head";
import Home from "./home/page";

export default function page() {
  return (
    <>
      <Head>
        <title>Feane Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}

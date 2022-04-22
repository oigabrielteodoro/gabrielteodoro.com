import Head from "next/head";

import { Footer, Header } from "~/ui";
import { Introduction, Profile, Career } from "~/ui/_layouts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Teodoro | Product Developer</title>
      </Head>
      <Header />
      <main>
        <Introduction />
        <Profile />
        <Career />
      </main>
      <Footer />
    </>
  );
}

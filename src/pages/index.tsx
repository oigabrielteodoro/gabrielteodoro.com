import { Footer, Header } from "~/ui";
import { Introduction, Profile, Career } from "~/ui/_layouts";

export default function Home() {
  return (
    <>
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

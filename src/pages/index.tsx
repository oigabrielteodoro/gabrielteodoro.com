import { Header } from "~/ui";
import { Introduction, Profile } from "~/ui/_layouts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Profile />
      </main>
    </>
  );
}

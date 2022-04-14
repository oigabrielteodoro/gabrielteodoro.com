import { Header, Shape } from "~/ui";
import { Profile } from "~/ui/_layouts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
      <Shape />
    </>
  );
}

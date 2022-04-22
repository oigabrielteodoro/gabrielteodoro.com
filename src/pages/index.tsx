import Head from "next/head";
import type { PrismicDocument } from "@prismicio/types";

import { Footer, Header } from "~/ui";
import { Introduction, Profile, Career } from "~/ui/_layouts";

import { createClient } from "~/lib/Prismic";
import type { Company } from "~/types";

type Props = {
  companies: PrismicDocument<Company>[];
  actualCompany: PrismicDocument<Company>;
};

export default function Home({ companies, actualCompany }: Props) {
  return (
    <>
      <Head>
        <title>Gabriel Teodoro | Product Developer</title>
      </Head>
      <Header />
      <main>
        <Introduction />
        <Profile />
        <Career actualCompany={actualCompany} companies={companies} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient();

  const companies = await client.getAllByType<PrismicDocument<Company>>(
    "company-id",
    {
      orderings: {
        field: "my.company-id.joinedAt",
        direction: "desc",
      },
    }
  );

  const actualCompanyUid = await client.getSingle("actualCompany");

  const actualCompany = await client.getByUID(
    "company-id",
    actualCompanyUid.data.company.uid
  );

  return {
    props: {
      companies,
      actualCompany,
    },
  };
}

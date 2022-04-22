import Head from "next/head";
import type { PrismicDocument } from "@prismicio/types";

import { Footer, Header, WithOutSSR } from "~/ui";
import { Introduction, Profile, Career } from "~/ui/_layouts";

import { createClient } from "~/lib/Prismic";
import type { Company, IndexContent } from "~/types";

type Props = {
  companies: PrismicDocument<Company>[];
  actualCompany: PrismicDocument<Company>;
  indexContent: PrismicDocument<IndexContent>;
};

export default function Home({
  companies,
  actualCompany,
  indexContent,
}: Props) {
  const introductionProps = {
    description: indexContent.data.description,
    seniority: indexContent.data.seniority,
    welcomeText: indexContent.data.welcomeText,
    fullName: indexContent.data.fullName,
    occupation: indexContent.data.occupation,
  };

  const profileProps = {
    title: indexContent.data.profileTitle,
    description: indexContent.data.profileDescription,
    useThisTecnologies: indexContent.data.profileUseThisTecnologies,
  };

  const careerContent = {
    title: indexContent.data.careerTitle,
    description: indexContent.data.careerDescription,
  };

  return (
    <>
      <Head>
        <title>Gabriel Teodoro | Product Developer</title>
      </Head>
      <Header />
      <main>
        <WithOutSSR>
          <Introduction {...introductionProps} />
          <Profile {...profileProps} />
          <Career
            actualCompany={actualCompany}
            companies={companies}
            content={careerContent}
          />
        </WithOutSSR>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient();

  const indexContent = await client.getSingle<PrismicDocument<IndexContent>>(
    "index",
    { lang: "pt-BR" }
  );

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
      indexContent,
    },
  };
}

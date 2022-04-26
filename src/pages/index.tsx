import Head from "next/head";
import type { PrismicDocument } from "@prismicio/types";

import { Footer, Header, WithOutSSR } from "~/ui";
import { Introduction, Occupations, Career } from "~/ui/_layouts";

import { getActualCompany, getCompanies, getIndexContent } from "~/lib/Prismic";
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
    startedAt: indexContent.data.startedAt,
    startedAtText: indexContent.data.startedAtText,
    contributionsText: indexContent.data.contributionsText,
  };

  const occupationsProps = {
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
          <Occupations {...occupationsProps} />
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
  const [companies, actualCompany, indexContent] = await Promise.all([
    getCompanies(),
    getActualCompany(),
    getIndexContent(),
  ]);

  return {
    props: {
      companies,
      actualCompany,
      indexContent,
    },
  };
}

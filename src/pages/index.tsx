import type { GetStaticProps } from "next";
import type { PrismicDocument } from "@prismicio/types";

import { Footer, Header, WithOutSSR } from "~/ui";
import { Introduction, Occupations, Career } from "~/ui/_layouts";

import { SEO } from "~/lib/SEO";
import {
  getActualCompany,
  getCompanies,
  getIndexContent,
  getPrismicClient,
} from "~/lib/Prismic";
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
      <SEO />
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const client = getPrismicClient({ defaultParams: { lang: locale } });

  const [companies, actualCompany, indexContent] = await Promise.all([
    getCompanies(client),
    getActualCompany(client),
    getIndexContent(client),
  ]);

  return {
    props: {
      companies,
      actualCompany,
      indexContent,
    },
  };
};

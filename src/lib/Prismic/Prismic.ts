import * as prismic from "@prismicio/client";
import type { PrismicDocument } from "@prismicio/types";

import sm from "~/../sm.json";
import type { Company, IndexContent, Occupation } from "~/types";

type IndexContentParams = {
  lang?: "pt-BR" | "en-US";
};

export const endpoint = sm.apiEndpoint;
export const client = prismic.createClient(endpoint);

export async function getOccupations(): Promise<Occupation[]> {
  const occupations = await client.getAllByType("occupation", {
    orderings: {
      field: "my.occupation.title",
      direction: "desc",
    },
  });

  return occupations.map((occupation) => ({
    description: occupation.data.description,
    projectsCount: occupation.data.projectsCount,
    title: occupation.data.title,
    technologies: occupation.data.technologies,
  }));
}

export async function getCompanies() {
  const companies = await client.getAllByType<PrismicDocument<Company>>(
    "company-id",
    {
      orderings: {
        field: "my.company-id.joinedAt",
        direction: "desc",
      },
    }
  );

  return companies;
}

export async function getActualCompany() {
  const single = await client.getSingle("actualCompany");

  return await client.getByUID<PrismicDocument<Company>>(
    "company-id",
    single.data.company.uid
  );
}

export async function getIndexContent(
  { lang }: IndexContentParams = { lang: "en-US" }
) {
  return await client.getSingle<PrismicDocument<IndexContent>>("index", {
    lang,
  });
}

export * from "@prismicio/client";

import * as prismic from "@prismicio/client";
import type { PrismicDocument } from "@prismicio/types";

import sm from "~/../sm.json";
import type { Company, IndexContent, Occupation } from "~/types";

export const endpoint = sm.apiEndpoint;

export function getPrismicClient(options?: prismic.ClientConfig) {
  return prismic.createClient(endpoint, options);
}

export async function getOccupations(
  client: prismic.Client
): Promise<Occupation[]> {
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

export async function getCompanies(client: prismic.Client) {
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

export async function getActualCompany(client: prismic.Client) {
  const single = await client.getSingle("actualCompany");

  return await client.getByUID<PrismicDocument<Company>>(
    "company-id",
    single.data.company.uid
  );
}

export async function getIndexContent(client: prismic.Client) {
  return await client.getSingle<PrismicDocument<IndexContent>>("index");
}

export * from "@prismicio/client";

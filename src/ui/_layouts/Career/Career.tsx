import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PrismicRichText } from "@prismicio/react";
import type { PrismicDocument, RichTextField } from "@prismicio/types";

import { Annotation } from "~/ui";
import { leftFadeIn } from "~/ui/_animations";
import type { Company as CompanyType } from "~/types";

import { Company } from "./Company";

import * as S from "./Career.styled";

type Props = {
  companies: PrismicDocument<CompanyType>[];
  actualCompany: PrismicDocument<CompanyType>;
  content: {
    title: string;
    description: RichTextField;
  };
};

export function Career({
  actualCompany,
  companies,
  content: { title, description },
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <S.Container ref={ref} inView={inView}>
      {inView && (
        <S.Content>
          <motion.div {...leftFadeIn({ transition: { delay: 0.6 } })}>
            <S.Title>{title}</S.Title>
            <Annotation>
              <PrismicRichText field={description} />
            </Annotation>
            <S.Diviser />
            <Company
              showTime={false}
              showWorkload={false}
              company={actualCompany}
            />
          </motion.div>
          <S.CompaniesList {...leftFadeIn({ transition: { delay: 0.8 } })}>
            {companies.map((company) => (
              <Company key={company.uid} company={company} />
            ))}
          </S.CompaniesList>
        </S.Content>
      )}
    </S.Container>
  );
}

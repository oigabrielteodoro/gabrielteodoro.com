import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Annotation } from "~/ui";

import { Company } from "./Company";

import * as S from "./Career.styled";
import { leftFadeIn } from "~/ui/_animations";

export function Career() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <S.Container ref={ref} inView={inView}>
      {inView && (
        <S.Content>
          <motion.div {...leftFadeIn({ transition: { delay: 0.6 } })}>
            <S.Title>It&apos;s 5 years of career...</S.Title>
            <Annotation>
              My career summarized in activities in the companies
              <br />
              where I worked.
            </Annotation>
            <S.Diviser />
            <Company
              name="Finbits"
              link="https://finbits.com.br"
              activity="Front-End Developer"
              imageUrl="https://media-exp1.licdn.com/dms/image/C4E0BAQFznaDuW9R6Dw/company-logo_100_100/0/1637937092613?e=2147483647&v=beta&t=iXAyX12je05bjI3qTCqB8U_Ihb7Wjc-g8bz6cuCRDIA"
            />
          </motion.div>
          <S.CompaniesList {...leftFadeIn({ transition: { delay: 0.8 } })}>
            <Company
              name="Finbits"
              link="https://finbits.com.br"
              activity="Front-End Developer"
              imageUrl="https://media-exp1.licdn.com/dms/image/C4E0BAQFznaDuW9R6Dw/company-logo_100_100/0/1637937092613?e=2147483647&v=beta&t=iXAyX12je05bjI3qTCqB8U_Ihb7Wjc-g8bz6cuCRDIA"
              time="4 months"
              workload="Full-time"
            />
            <Company
              name="Brainn.co"
              link="https://brainn.co"
              activity="Front-End Developer"
              imageUrl="https://media-exp1.licdn.com/dms/image/C4E0BAQH52Ww03T5AYg/company-logo_100_100/0/1612288380396?e=2147483647&v=beta&t=gm05SjTqIQ74VayG4uh1qXFt6W2R-l4OaSqm_cfxiso"
              time="10 months"
              workload="Full-time"
            />
            <Company
              name="Flimed"
              link="https://flimed.com.br"
              activity="Front-End Developer"
              imageUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFEkEcaKDJWxQ/company-logo_100_100/0/1595301921099?e=2147483647&v=beta&t=aONhuD1IQx_QvjQWinYxcp36wcpHpmImKv1B6_S9c5Y"
              time="10 months"
              workload="Full-time"
            />
          </S.CompaniesList>
        </S.Content>
      )}
    </S.Container>
  );
}

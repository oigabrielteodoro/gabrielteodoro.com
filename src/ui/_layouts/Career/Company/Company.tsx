import Link from "next/link";
import { useRouter } from "next/router";
import { PrismicRichText } from "@prismicio/react";
import { formatDistance, formatDistanceToNow, Locale } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import type { PrismicDocument } from "@prismicio/types";
import type { ElementType } from "react";

import * as S from "./Company.styled";
import type { Company as CompanyType } from "~/types";

type Props = {
  as?: ElementType;
  showTime?: boolean;
  showWorkload?: boolean;
  company: PrismicDocument<CompanyType>;
};

const locales: {
  [key: string]: Locale;
} = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

export function Company({
  as,
  company,
  showTime = true,
  showWorkload = true,
}: Props) {
  const router = useRouter();

  const { joinedAt, exitedAt, url, logo, occupation, workload, name } =
    company.data;

  const formatOptions = {
    locale: router?.locale ? locales[router.locale] : undefined,
  };

  const time = exitedAt
    ? formatDistance(new Date(joinedAt), new Date(exitedAt), formatOptions)
    : formatDistanceToNow(new Date(joinedAt), formatOptions);

  return (
    <S.Container as={as}>
      <Link href={url} passHref>
        <a target="_blank">
          <S.CompanyImage
            width={52}
            height={52}
            src={logo.url!}
            alt={logo.alt!}
          />
        </a>
      </Link>
      <S.CompanyInfo>
        <strong>
          <PrismicRichText field={name} /> {showTime && <small>{time}</small>}
        </strong>
        <small>
          {occupation}
          {showWorkload ? ` • ${workload}` : ""}
        </small>
      </S.CompanyInfo>
    </S.Container>
  );
}

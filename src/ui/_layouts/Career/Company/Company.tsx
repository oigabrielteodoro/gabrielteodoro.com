import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { formatDistance, formatDistanceToNow } from "date-fns";
import type { PrismicDocument } from "@prismicio/types";

import * as S from "./Company.styled";
import type { Company as CompanyType } from "~/types";

type Props = {
  showTime?: boolean;
  showWorkload?: boolean;
  company: PrismicDocument<CompanyType>;
};

export function Company({
  company,
  showTime = true,
  showWorkload = true,
}: Props) {
  const { joinedAt, exitedAt, url, logo, occupation, workload, name } =
    company.data;

  const time = exitedAt
    ? formatDistance(new Date(joinedAt), new Date(exitedAt))
    : formatDistanceToNow(new Date(joinedAt));

  return (
    <S.Container>
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

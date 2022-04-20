import Link from "next/link";

import * as S from "./Company.styled";

type Props = {
  name: string;
  link: string;
  activity: string;
  imageUrl: string;
  workload?: string;
  time?: string;
};

export function Company({
  name,
  link,
  activity,
  workload,
  time,
  imageUrl,
}: Props) {
  return (
    <S.Container>
      <Link href={link} passHref>
        <a target="_blank">
          <S.CompanyImage width={52} height={52} src={imageUrl} alt={name} />
        </a>
      </Link>
      <S.CompanyInfo>
        <strong>
          {name} {time && <small>{time}</small>}
        </strong>
        <small>
          {activity}
          {workload ? ` • ${workload}` : ""}
        </small>
      </S.CompanyInfo>
    </S.Container>
  );
}

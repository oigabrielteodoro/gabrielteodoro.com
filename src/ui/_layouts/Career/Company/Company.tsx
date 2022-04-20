import * as S from "./Company.styled";

type Props = {
  name: string;
  activity: string;
  imageUrl: string;
  workload?: string;
  time?: string;
};

export function Company({ name, activity, workload, time, imageUrl }: Props) {
  return (
    <S.Container>
      <S.CompanyImage width={52} height={52} src={imageUrl} alt={name} />
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

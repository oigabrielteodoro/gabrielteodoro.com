import { FiLayout } from "react-icons/fi";
import { BiServer } from "react-icons/bi";

import { Button, Annotation } from "~/ui";

import * as S from "./Profile.styled";

export function Profile() {
  return (
    <S.Container>
      <div>
        <S.Card active>
          <S.CardTitle active>
            <strong>Front-End</strong>
            <FiLayout size={24} />
          </S.CardTitle>
          <small>I develop front-end with coding super smooth</small>
          <Button type="link">See more</Button>
        </S.Card>
        <S.Card>
          <S.CardTitle>
            <strong>Back-End</strong>
            <BiServer size={24} />
          </S.CardTitle>
          <small>I develop back-end scalable and performative</small>
          <Button type="link">See more</Button>
        </S.Card>
      </div>
      <S.InformationBox>
        <S.Title>
          Talk is cheap. <br />
          Show me the code!
        </S.Title>
        <Annotation>
          I <b>design</b> and <b>code beautifully</b> simple things, and I love
          what I do.
        </Annotation>
        <strong>I use this tecnologies:</strong>
        <ul>
          <li>
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/react.svg"
              alt="React.js"
            />
          </li>
          <li>
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/next.svg"
              alt="NextJS"
            />
          </li>
          <li>
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/typescript.svg"
              alt="TypeScript"
            />
          </li>
          <li>
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/javascript.svg"
              alt="JavaScript"
            />
          </li>
        </ul>
      </S.InformationBox>
    </S.Container>
  );
}

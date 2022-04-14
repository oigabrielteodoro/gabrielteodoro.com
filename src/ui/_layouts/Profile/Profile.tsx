import { AiOutlineExperiment } from "react-icons/ai";
import { FiBriefcase, FiGithub } from "react-icons/fi";

import { Button } from "~/ui";

import * as S from "./Profile.styled";

export function Profile() {
  return (
    <S.Container>
      <S.Box>
        <S.HelloText>Hello there 👋</S.HelloText>
        <S.UserBox>
          <S.Avatar src="https://github.com/oigabrielteodoro.png" />
          <section>
            <strong>Gabriel Teodoro</strong>
            <span>Front-End Developer</span>
          </section>
        </S.UserBox>
        <S.Description>
          I&apos;m <b>Product Developer</b> to 5 years. I started study
          programming with 13 years age. I really like Front-End and all
          technologies around <b>TypeScript with React</b>
        </S.Description>
        <Button>View more</Button>
      </S.Box>
      <S.InformationsList>
        <ul>
          <li>
            <div className="iconBox">
              <AiOutlineExperiment size={24} />
            </div>
            <div className="textBox">
              <strong>+5</strong>
              <span>Years of experience</span>
            </div>
          </li>
          <li>
            <div className="iconBox">
              <FiBriefcase size={22} />
            </div>
            <div className="textBox">
              <strong>Middle</strong>
              <span>Front-End Developer</span>
            </div>
          </li>
          <li>
            <div className="iconBox">
              <FiGithub size={20} />
            </div>
            <div className="textBox">
              <strong>+250</strong>
              <span>Contributions this year</span>
            </div>
          </li>
        </ul>
      </S.InformationsList>
    </S.Container>
  );
}
import { AiOutlineExperiment } from "react-icons/ai";
import { FiBriefcase, FiGithub } from "react-icons/fi";

import { Button, Annotation } from "~/ui";

import * as S from "./Introduction.styled";

export function Introduction() {
  return (
    <S.Container>
      <S.Box>
        <S.HelloText>Hello there 👋</S.HelloText>
        <S.UserBox>
          <S.Avatar src="https://github.com/oigabrielteodoro.png" />
          <section>
            <strong>Gabriel Teodoro</strong>
            <small>Front-End Developer</small>
          </section>
        </S.UserBox>
        <Annotation>
          I&apos;m <b>Product Developer</b> to 5 years. I started study
          programming with 13 years age. I really like Front-End and all
          technologies around <b>TypeScript with React</b>
        </Annotation>
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
              <small>Years of experience</small>
            </div>
          </li>
          <li>
            <div className="iconBox">
              <FiBriefcase size={22} />
            </div>
            <div className="textBox">
              <strong>Middle</strong>
              <small>Front-End Developer</small>
            </div>
          </li>
          <li>
            <div className="iconBox">
              <FiGithub size={20} />
            </div>
            <div className="textBox">
              <strong>+250</strong>
              <small>Contributions this year</small>
            </div>
          </li>
        </ul>
      </S.InformationsList>
    </S.Container>
  );
}

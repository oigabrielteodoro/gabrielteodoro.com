import { PrismicRichText } from "@prismicio/react";
import { AiOutlineExperiment } from "react-icons/ai";
import { FiBriefcase, FiGithub } from "react-icons/fi";

import { Button, Annotation } from "~/ui";
import { leftFadeIn, rightFadeIn } from "~/ui/_animations";

import type { IndexContent } from "~/types";

import * as S from "./Introduction.styled";

type Props = Pick<
  IndexContent,
  "welcomeText" | "description" | "fullName" | "occupation" | "seniority"
>;

export function Introduction({
  welcomeText,
  description,
  occupation,
  seniority,
  fullName,
}: Props) {
  return (
    <S.Container>
      <S.Box {...leftFadeIn()}>
        <S.HelloText>{welcomeText} 👋</S.HelloText>
        <S.UserBox>
          <S.Avatar src="https://github.com/oigabrielteodoro.png" />
          <section>
            <strong>{fullName}</strong>
            <small>Product Developer</small>
          </section>
        </S.UserBox>
        <Annotation>
          <PrismicRichText field={description} />
        </Annotation>
        <Button>View more</Button>
      </S.Box>
      <S.InformationsList {...rightFadeIn()}>
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
              <strong>{seniority}</strong>
              <small>{occupation}</small>
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

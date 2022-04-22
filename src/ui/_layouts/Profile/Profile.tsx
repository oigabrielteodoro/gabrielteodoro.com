import { useState } from "react";
import { motion } from "framer-motion";

import { FiLayout } from "react-icons/fi";
import { BiServer } from "react-icons/bi";
import { PrismicRichText } from "@prismicio/react";

import type { RichTextField } from "@prismicio/types";

import { Button, Annotation, Tooltip } from "~/ui";
import { leftFadeIn, rightFadeIn } from "~/ui/_animations";

import * as S from "./Profile.styled";

type CardType = "Front-End" | "Back-End";

type Props = {
  title: RichTextField;
  description: RichTextField;
  useThisTecnologies: string;
};

export function Profile({ title, description, useThisTecnologies }: Props) {
  const [activeCard, setActiveCard] = useState<CardType>("Front-End");

  function handleActiveCard(cardType: CardType) {
    setActiveCard(cardType);
  }

  return (
    <S.Container>
      <motion.div {...leftFadeIn({ transition: { delay: 0.5 } })}>
        <S.Card onClick={() => handleActiveCard("Front-End")}>
          <S.CardTitle active={activeCard === "Front-End"}>
            <strong>Front-End</strong>
            <FiLayout size={24} />
          </S.CardTitle>
          <small>I develop front-end with coding super smooth</small>
          <Button type="text" color="neutral">
            3 projects
          </Button>
        </S.Card>
        <S.Card onClick={() => handleActiveCard("Back-End")}>
          <S.CardTitle active={activeCard === "Back-End"}>
            <strong>Back-End</strong>
            <BiServer size={24} />
          </S.CardTitle>
          <small>I develop back-end scalable and performative</small>
          <Button type="text" color="neutral">
            5 projects
          </Button>
        </S.Card>
      </motion.div>
      <S.InformationBox {...rightFadeIn({ transition: { delay: 0.5 } })}>
        <S.Title>
          <PrismicRichText field={title} />
        </S.Title>
        <Annotation>
          <PrismicRichText field={description} />
        </Annotation>
        <strong>{useThisTecnologies}</strong>
        <ul>
          <Tooltip
            as="li"
            message={
              <S.TechUsedText>
                React.js é utilizado para construção de interfaces.
              </S.TechUsedText>
            }
          >
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/react.svg"
              alt="React.js"
            />
          </Tooltip>
          <Tooltip
            as="li"
            message={
              <S.TechUsedText>
                Next.js é utilizado para construção de interfaces.
              </S.TechUsedText>
            }
          >
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/next.svg"
              alt="NextJS"
            />
          </Tooltip>
          <Tooltip
            as="li"
            message={
              <S.TechUsedText>
                TypeScript é utilizado para construção de interfaces.
              </S.TechUsedText>
            }
          >
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/typescript.svg"
              alt="TypeScript"
            />
          </Tooltip>
          <Tooltip
            as="li"
            message={
              <S.TechUsedText>
                JavaScript é utilizado para construção de interfaces.
              </S.TechUsedText>
            }
          >
            <S.TechUsedIcon
              src="https://gabrielteodoro.com/static/img/techs/javascript.svg"
              alt="JavaScript"
            />
          </Tooltip>
        </ul>
      </S.InformationBox>
    </S.Container>
  );
}

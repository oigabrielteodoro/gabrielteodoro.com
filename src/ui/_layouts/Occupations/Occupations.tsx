import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FiLayout } from "react-icons/fi";
import { BiServer } from "react-icons/bi";
import { PrismicRichText } from "@prismicio/react";
import type { RichTextField } from "@prismicio/types";

import { Button, Annotation, Tooltip } from "~/ui";
import { leftFadeIn, rightFadeIn } from "~/ui/_animations";
import { getOccupations } from "~/lib/Prismic";
import type { Occupation } from "~/types";

import * as S from "./Occupations.styled";

type Props = {
  title: RichTextField;
  description: RichTextField;
  useThisTecnologies: string;
};

const occupationIcon = {
  "Front-End": <FiLayout size={24} />,
  "Back-End": <BiServer size={24} />,
};

export function Occupations({ title, description, useThisTecnologies }: Props) {
  const [activeOccupation, setActiveOccupation] = useState<Occupation>();
  const [occupations, setOccupations] = useState<Occupation[]>([]);

  useEffect(() => {
    getOccupations().then((occupations) => {
      setOccupations(occupations);
      setActiveOccupation(occupations[0]);
    });
  }, []);

  function handleActive(occupation: Occupation) {
    setActiveOccupation(occupation);
  }

  return (
    <S.Container>
      <motion.div {...leftFadeIn({ transition: { delay: 0.5 } })}>
        {occupations.map((occupation) => (
          <S.Card
            key={occupation.title}
            onClick={() => handleActive(occupation)}
          >
            <S.CardTitle active={activeOccupation?.title === occupation.title}>
              <strong>{occupation.title}</strong>
              {occupationIcon[occupation.title]}
            </S.CardTitle>
            <small>{occupation.description}</small>
            <Button type="text" color="neutral">
              {occupation.projectsCount} projects
            </Button>
          </S.Card>
        ))}
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
          {activeOccupation?.technologies.map((technology) => (
            <Tooltip
              as="li"
              key={technology.title}
              message={
                <S.TechUsedInfo>
                  <strong>{technology.title}</strong>
                  <p>{technology.description}</p>
                </S.TechUsedInfo>
              }
            >
              <S.TechUsedIcon
                src={technology.logo.url!}
                alt={technology.logo.alt!}
              />
            </Tooltip>
          ))}
        </ul>
      </S.InformationBox>
    </S.Container>
  );
}

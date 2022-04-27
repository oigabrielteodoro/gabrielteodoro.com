import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import { Button } from "~/ui";

import * as S from "./LanguageSelect.styled";

const languages = [
  {
    name: "English",
    locale: "en-US",
    icon: "/countries/usa.svg",
  },
  {
    name: "Português",
    locale: "pt-BR",
    icon: "/countries/brazil.svg",
  },
];

export function LanguageSelect() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSelectList() {
    setIsOpen((prevState) => !prevState);
  }

  const languageSelected =
    languages.find((language) => language.locale === router.locale) ||
    languages[0];

  return (
    <S.Container>
      <Button type="neutral" onClick={handleToggleSelectList}>
        <S.CountryFlag
          width={70}
          height={30}
          alt={languageSelected.name}
          src={languageSelected.icon}
        />
        {languageSelected.name}
        <S.ChevronDownWithMargin open={isOpen} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <S.SelectList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {languages
              .filter((language) => language.name !== languageSelected.name)
              .map((language) => (
                <li key={language.locale}>
                  <Link href="/" locale={language.locale} passHref>
                    <a>
                      <S.CountryFlag src={language.icon} alt={language.name} />
                      {language.name}
                    </a>
                  </Link>
                </li>
              ))}
          </S.SelectList>
        )}
      </AnimatePresence>
    </S.Container>
  );
}

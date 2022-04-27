import { Logo } from "~/ui";

import { LanguageSelect } from "./LanguageSelect";

import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Box>
      <S.Content>
        <Logo />
        <LanguageSelect />
      </S.Content>
    </S.Box>
  );
}

import { Logo } from "~/ui";

import { LanguageSelect } from "./LanguageSelect";

import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Box>
      <S.Content>
        <Logo />
        <S.NavigationBox>
          <S.NavigationList>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Career</button>
            </li>
          </S.NavigationList>
          <LanguageSelect />
        </S.NavigationBox>
      </S.Content>
    </S.Box>
  );
}

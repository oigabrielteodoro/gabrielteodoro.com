import { Logo } from "~/ui";

import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Box>
      <S.Content>
        <Logo />
        <nav>
          <S.Navigation>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Career</button>
            </li>
            <li>
              <button>Github</button>
            </li>
          </S.Navigation>
        </nav>
      </S.Content>
    </S.Box>
  );
}

import { Button } from "~/ui";

import * as S from "./LanguageSelect.styled";

export function LanguageSelect() {
  return (
    <Button type="neutral">
      <S.CountryFlag src="/countries/usa.svg" />
      English
      <S.ChevronDownWithMargin />
    </Button>
  );
}

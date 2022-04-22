import { Button } from "~/ui";

import { LanguageType } from "~/lib/Language";

import * as S from "./LanguageSelect.styled";

export function LanguageSelect() {
  return (
    <Button type="neutral">
      <S.CountryFlag src={LanguageType.USA} />
      English
      <S.ChevronDownWithMargin />
    </Button>
  );
}

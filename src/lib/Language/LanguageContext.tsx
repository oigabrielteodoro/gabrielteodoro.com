import { createContext, ReactNode, useEffect, useState } from "react";

import * as Storage from "~/lib/Storage";

export enum LanguageType {
  USA = "/countries/usa.svg",
  BRAZIL = "/countries/brazil.svg",
}

type Props = {
  children: ReactNode;
};

type ContextProps = {
  languageSelected: LanguageType;
  selectLanguage: (languageType: LanguageType) => void;
};

const LanguageContext = createContext<ContextProps>({
  languageSelected: LanguageType.USA,
  selectLanguage: (languageType: LanguageType) => languageType,
});

export function LanguageProvider({ children }: Props) {
  const [languageSelected, setLanguageSelected] = useState(LanguageType.USA);

  useEffect(() => {
    async function loadStorage() {
      const languageSelected = await Storage.getItem<LanguageType>("language");

      if (languageSelected) {
        setLanguageSelected(languageSelected);
      }
    }

    loadStorage();
  }, []);

  async function handleOnSelectLanguage(languageType: LanguageType) {
    setLanguageSelected(languageType);

    await Storage.setItem("language", languageType);
  }

  return (
    <LanguageContext.Provider
      value={{ languageSelected, selectLanguage: handleOnSelectLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

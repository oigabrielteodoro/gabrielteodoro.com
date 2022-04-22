import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export function WithOutSSR({ children }: Props) {
  const [isSSREnvironment, setSSREnvironment] = useState(true);

  useEffect(() => {
    setSSREnvironment(false);
  }, []);

  if (isSSREnvironment) {
    return null;
  }

  return <>{children}</>;
}

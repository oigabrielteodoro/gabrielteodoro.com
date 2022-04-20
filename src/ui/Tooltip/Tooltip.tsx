import { ElementType, ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import * as S from "./Tooltip.styled";

export type TooltipProps = {
  as?: ElementType;
  message: ReactNode;
  children: ReactNode;
  placement?: "top";
  size?: "small" | "medium";
};

export function Tooltip({
  as,
  children,
  message,
  placement = "top",
  size = "medium",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.BaseElement
      as={as}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <S.Container size={size} placement={placement}>
              {message}
            </S.Container>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </S.BaseElement>
  );
}

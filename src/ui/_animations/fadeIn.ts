import { MotionProps } from "framer-motion";

type AnimationMotionProps = (props?: MotionProps) => MotionProps;

export const leftFadeIn: AnimationMotionProps = (props) => ({
  variants: {
    hidden: {
      opacity: 0,
      x: "-10%",
    },
    visible: {
      opacity: 1,
      x: "0",
    },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  ...props,
});

export const rightFadeIn: AnimationMotionProps = (props) => ({
  variants: {
    hidden: {
      opacity: 0,
      x: "50%",
    },
    visible: {
      opacity: 1,
      x: "0",
    },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  ...props,
});

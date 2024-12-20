import { easeIn } from "framer-motion";

export const fadeIn = (direction, delay) => {
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          delay: delay,
          ease: easeIn,
        },
      },
    };
  }
};

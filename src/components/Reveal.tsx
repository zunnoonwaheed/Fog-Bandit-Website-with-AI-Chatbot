import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "span" | "li" | "article";
}

const offsetFor = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up": return { x: 0, y: distance };
    case "down": return { x: 0, y: -distance };
    case "left": return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
    default: return { x: 0, y: 0 };
  }
};

const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  className,
  once = true,
  amount = 0.2,
  as = "div",
}: RevealProps) => {
  const reduce = useReducedMotion();
  const offset = offsetFor(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;

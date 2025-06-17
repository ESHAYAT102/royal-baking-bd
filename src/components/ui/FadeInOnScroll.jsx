import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.6,
  delay = 0,
  threshold = 2,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: threshold,
    margin: "0px 0px -100px 0px",
  });

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: "easeOut",
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "scale":
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;

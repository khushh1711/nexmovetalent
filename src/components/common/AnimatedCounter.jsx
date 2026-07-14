import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AnimatedCounter = ({ value, duration = 2.0, suffix = "" }) => {
  const ref = useRef(null);
  // Trigger animation when the stats card is partially visible in the viewport
  const inView = useInView(ref, { once: true, margin: "-10%" });
  
  // Extract only the first sequence of numbers, e.g. "5000+" -> 5000, "24/7" -> 24
  const match = value.toString().match(/\d+/);
  const number = match ? parseInt(match[0], 10) : 0;
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView && number > 0) {
      const controls = animate(motionValue, number, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, number, motionValue, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        const formatted = latest.toLocaleString();
        const autoSuffix = suffix || (match ? value.substring(match.index + match[0].length) : "");
        ref.current.textContent = `${formatted}${autoSuffix}`;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix, value, match]);

  // Initial display is "0" + suffix
  const initialSuffix = suffix || (match ? value.substring(match.index + match[0].length) : "");
  return <span ref={ref}>0{initialSuffix}</span>;
};

export default AnimatedCounter;

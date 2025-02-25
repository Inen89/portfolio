import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./CursorBlinker";

export default function TextAnim() {
  const baseText = "FRONTEND DEVELOPER";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      duration: 6,
      ease: "backOut",
      delay: 1,
    });
    return controls.stop;
  }, []);

  return (
    <span className="relative flex items-center text-lg font-semibold whitespace-nowrap overflow-visible mt-5 ">
      {/* Text outline */}
      <span className="relative left-0 top-0 h-full text-2xl sm:text-3xl font-semibold text-stroke-aqua text-transparent z-0 font-poppins ">
        FRONTEND DEVELOPER
      </span>

      {/* Text fill and cursor */}
      <span className="absolute z-10 flex items-center">
        {/* Text fill */}
        <motion.span className="h-full bg-transparent overflow-visible text-2xl sm:text-3xl font-semibold text-stroke-aqua text-aqua font-poppins">
          {displayText}
        </motion.span>
        {/* Cursor */}
        <CursorBlinker />
      </span>
    </span>
  );
}

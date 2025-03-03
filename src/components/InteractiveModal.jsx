import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

const InteractiveModal = ({
  idNumber,
  title,
  color = "blue",
  shadowPosition = "left",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);

  //#region Variables
  const colorlVariants = {
    blue: "bg-deep-blue text-aqua",
    green: "bg-green text-lime",
    yellow: "bg-dark-yellow text-lemon",
    pink: "bg-dark-pink text-magenta",
    white: "bg-dark-grey text-white",
    orange: "bg-dark-orange text-orange",
    red: "bg-dark-red text-red",
  };

  const shadowStyle =
    shadowPosition.toLowerCase() === "left"
      ? `-30px 30px 20px ${color}`
      : shadowPosition.toLowerCase() === "right"
      ? `30px 30px 20px ${color}`
      : `0px 30px 20px ${color}`;

  //#endregion

  //#region Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      x: modalPosition.x,
      y: modalPosition.y,
      scale: 0,
      boxShadow: shadowStyle,
    },
    visible: {
      opacity: 1,

      x: "calc(50vw - 50.5%)",
      y: "calc(50vh - 50%)",
      scale: 1,
      boxShadow: `0px +0px 0px `,
      transition: { type: "easeInOut", duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: modalPosition.x,
      y: modalPosition.y,
      scale: 0,
      boxShadow: shadowStyle,
      transition: { duration: 0.3 },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };
  //#endregion

  return (
    <motion.div
      className="relative left-0 top-0 inline-block  p-2 w-11/12 sm:w-5/12 md:w-3/12 h-32 mb-6"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
    >
      {/* modal trigger */}
      <div
        className="relative top-0 left-0 cursor-pointer rounded-lg hover:shadow-neon-yellow "
        ref={triggerRef}
        onClick={() => {
          setIsOpen(true);
          const rect = triggerRef.current.getBoundingClientRect();
          setModalPosition({ x: rect.left, y: rect.top });
        }}
      >
        {/* faceplate */}
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-poppins font-semibold text-5xl ml-2 text-stroke-black text-stone-300">
              {idNumber}
            </p>
            <p className="font-poppins font-semibold text-3xl ml-2  text-stroke-black text-stone-300">
              {title}
            </p>
          </div>
          <div
            className={`absolute right-0 top-0  w-3/4 h-32 ${
              color.toLowerCase() === "yellow"
                ? "bg-yellow"
                : `${colorlVariants[color]}`
            } z-[-1] `}
          ></div>
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* backdrop */}
              <motion.div
                className="fixed inset-0 bg-black z-40"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsOpen(false)}
              />

              {/* modal */}
              <motion.div
                className={`fixed left-0 top-0 rounded-lg p-2 sm:p-10 shadow-xl z-50 w-10/12 sm:w-7/12 transform origin-bottom-left ${colorlVariants[color]}`}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4"
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </button>
                {children}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.getElementById("dialog")
      )}
    </motion.div>
  );
};

export default InteractiveModal;

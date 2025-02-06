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
    initial: { scale: 1 },
    hover: { scale: 1.1 },
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
    <div className="relative left-0 top-0 inline-block w-1/3 h-32">
      {/* modal trigger */}
      <motion.div
        className="relative top-0 left-0 cursor-pointer rounded-lg hover:shadow-neon-yellow "
        ref={triggerRef}
        variants={itemVariants}
        initial="initial"
        whileHover="hover"
        onClick={() => {
          setIsOpen(true);
          const rect = triggerRef.current.getBoundingClientRect();
          setModalPosition({ x: rect.left, y: rect.top });
        }}
      >
        {/* faceplate */}
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl ml-2">
              {idNumber}
            </p>
            <p className="font-playfair font-semibold text-3xl ml-2">{title}</p>
          </div>
          <div
            className={`absolute right-0 top-0  w-3/4 h-32 ${
              color.toLowerCase() === "yellow"
                ? "bg-yellow"
                : `${colorlVariants[color]}`
            } z-[-1] `}
          ></div>
        </div>
      </motion.div>
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
                className={`fixed left-0 top-0 rounded-lg p-10 shadow-xl z-50  w-7/12 transform origin-bottom-left ${colorlVariants[color]}`}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  className="absolute top-4 right-4"
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
    </div>
  );
};

export default InteractiveModal;

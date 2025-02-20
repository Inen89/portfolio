import { motion } from "framer-motion";

export default function EducationText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  return (
    <div className="px-8">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
        Educational Experience
      </h3>
      <h4 className="text-sm sm:text-xl font-semibold my-2">
        Books I have studied
      </h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          [1] Schawrzmüller M., React Key Concepts, Helion, 2023.
        </li>
        <li className={listClass}>
          [2] Sochacki T., JavaScript Interaktywne Aplikacje Webowe, Helion,
          2020.
        </li>
        <li className={listClass}>
          [3] Sochacki T., JavaScript Tworzenie Nowoczesnych Aplikacji Webowych,
          Helion, 2020.
        </li>
      </motion.ul>
      <h4 className="text-sm sm:text-xl font-semibold my-2">
        Completed Courses on Udemy
      </h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          [4] Portilla J., The Complete SQL Bootcamp: Go from Zero to Hero.
        </li>
        <li className={listClass}>
          [5] Wąsikowski J., Kurs FullStack Web Developer od Podstaw do Mastera.
        </li>
        <li className={listClass}>
          [6] Wąsikowski J., Vanilla JavaScript od Podstaw - Stwórz 15
          Projektów.
        </li>
        <li className={listClass}>
          [7] Schwarzmüller M., 100 Days Of Code - 2024 Web Development
          Bootcamp.
        </li>
        <li className={listClass}>
          [8] Schwarzmüller M., React - The Complete Guide 2024 (incl. Next.js,
          Redux).
        </li>
      </motion.ul>
      <h4 className="text-sm sm:text-xl font-semibold my-2">
        Courses in Progress
      </h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          [9] Wąsikowski J., Kurs FullStack Web Developer od Podstaw do Mastera.
        </li>
      </motion.ul>
    </div>
  );
}

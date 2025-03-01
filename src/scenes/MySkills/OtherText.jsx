import { motion } from "framer-motion";

export default function OtherText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs sm:text-base hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  const boldClass = "font-bold";
  return (
    <div className="px-8 select-none">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">Other</h3>
      <motion.ul
        className="flex flex-col list-[square] justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          <p className={boldClass}>Git & GitHub: </p>Proficient in using GitHub
          for code management and project documentation.
        </li>
        <li className={listClass}>
          <p className={boldClass}>UX/UI: </p>Experience with SCADA systems has
          developed skills in designing clear and intuitive applications,
          ensuring optimal user experience.
        </li>
      </motion.ul>
    </div>
  );
}

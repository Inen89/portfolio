import { motion } from "framer-motion";

export default function FuturePlansText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  return (
    <div className="px-8">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
        Future Plans
      </h3>
      <h4 className="text-sm sm:text-xl font-semibold my-2">
        Fullstack Development
      </h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          I plan to further develop my skills in Node.js and Express by creating
          full-stack applications. I aim to enrich my portfolio with projects
          showcasing my abilities in frontend and backend integration.
        </li>
      </motion.ul>
      <h4 className="text-sm sm:text-xl font-semibold my-2">
        Self-Improvement and Learning
      </h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          As a self-taught developer, I continuously seek new knowledge sources
          to deepen my understanding and skills. I plan to continue learning
          through books and courses to expand my competencies in areas that are
          new to me or that I wish to improve.
        </li>
      </motion.ul>
      <h4 className="text-sm sm:text-xl font-semibold my-2">Books to Study</h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          [10] Crump S., Simplify Testing with React Testing Library, Helion,
          2023.
        </li>
        <li className={listClass}>
          [11] Choi D., Full-Stack React, TypeScript, and Node, Helion, 2022.
        </li>
      </motion.ul>
      <h4 className="text-sm sm:text-xl font-semibold my-2">Planned Courses</h4>
      <motion.ul
        className="flex flex-col list-none justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          [12] Schwarzmüller M., NodeJS - The Complete Guide.
        </li>
        <li className={listClass}>
          [13] Schwarzmüller M., Next.js 14 & React - The Complete Guide.
        </li>
      </motion.ul>
    </div>
  );
}

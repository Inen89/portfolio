import { motion } from "framer-motion";

export default function FrontendText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs sm:text-base hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  const boldClass = "font-bold";
  return (
    <div className="px-8 select-none">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
        Frontend
      </h3>
      <motion.ul
        className="flex flex-col list-[square] justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          <p className={boldClass}> HTML & CSS:</p> Advanced knowledge of HTML5
          and CSS3, including Flexbox and Grid Layout for creating responsive
          web pages.
        </li>
        <li className={listClass}>
          <p className={boldClass}>JavaScript (ES6+):</p> Ability to create
          dynamic and interactive applications. Understanding of advanced
          concepts: asynchronous programming, destructuring, modules, etc.
        </li>
        <li className={listClass}>
          <p className={boldClass}>React:</p>Main frontend technology. SPA
          development, state management (Redux, Context API), performance
          optimization, hooks (useState, useEffect, custom), React Router,
          TanStack Query, form handling (react-hook-form), authentication, data
          validation, best practices (lazy loading, memo).
        </li>
        <li className={listClass}>
          <span className={boldClass}>Next.js: </span>
          Basic knowledge, routing, SSR, SSG.
        </li>
        <li className={listClass}>
          <span className={boldClass}>Framer Motion: </span>Smooth animations
          and interactions in React applications.
        </li>
        <li className={listClass}>
          <span className={boldClass}>Tailwind CSS:</span> Rapid styling and
          prototyping of applications.
        </li>
        <li className={listClass}>
          <span className={boldClass}>SASS:</span> Basic knowledge, style
          management, variables.
        </li>
      </motion.ul>
    </div>
  );
}

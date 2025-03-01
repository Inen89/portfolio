import { motion } from "framer-motion";

export default function BackendText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs sm:text-base hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  const boldClass = "font-bold";
  return (
    <div className="px-8 select-none">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
        Backend
      </h3>
      <motion.ul
        className="flex flex-col list-[square] justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          <p className={boldClass}>Node.js & Express: </p> Basic knowledge,
          including server creation, routing management, middleware, HTTP
          request handling, REST API, and database integration.
        </li>
        <li className={listClass}>
          <p className={boldClass}>MongoDB: </p> Basic knowledge of CRUD,
          schema, and SQL queries.
        </li>
        <li className={listClass}>
          <p className={boldClass}>MySQL: </p>Basic knowledge of CRUD, schema,
          and SQL queries.
        </li>
        <li className={listClass}>
          <p className={boldClass}>C#: </p>Experience in writing scripts in C#
          in automation environments, mainly for automating processes in SCADA
          systems. Understanding of object-oriented programming principles and
          applying design patterns.
        </li>
      </motion.ul>
    </div>
  );
}

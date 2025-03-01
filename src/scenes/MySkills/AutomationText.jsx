import { motion } from "framer-motion";

export default function AutomationText() {
  const listClass = `p-1 sm:p-2 px-2 sm:px-4 rounded-md w-full text-xs sm:text-base hover:bg-black hover:bg-opacity-20 hover:transition-all hover:brightness-200
     hover:shadow-md hover:shadow-black hover:scale-105  hover:duration-500`;
  const boldClass = "font-bold";
  return (
    <div className="px-8 select-none">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
        Automation and SCADA
      </h3>
      <motion.ul
        className="flex flex-col list-[square] justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <li className={listClass}>
          <p className={boldClass}>Experience: </p>5 years of experience in
          SCADA and PLC systems (Siemens). Designing and implementing systems,
          creating user-friendly visualizations.
        </li>
        <li className={listClass}>
          <p className={boldClass}>Projects: </p> Tartak Olczyk, Bumech, Soymax,
          Polish Armed Forces, Mondi, Steico, IKEA, Biofeed.
        </li>
        <li className={listClass}>
          <p className={boldClass}>Skills: </p>PLC programming, SCADA systems
          (alarms, SMS, emails, reporting, trends, user administration, data
          archiving, shift calendar), analysis, and verification of control
          cabinets and AKPiA (Automation and Control of Processes and
          Applications).
        </li>
      </motion.ul>
    </div>
  );
}

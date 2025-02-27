import skillsImg from "../assets/img/skills.png";
import InteractiveModal from "../components/InteractiveModal";

import FrontendText from "./MySkills/FrontendText";
import BackendText from "./MySkills/BackendText";
import AutomationText from "./MySkills/AutomationText";
import OtherText from "./MySkills/OtherText";
import EducationText from "./MySkills/EducationText";
import FuturePlansText from "./MySkills/FuturePlansText";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  const positions = {
    small: ["left", "left", "left", "left", "left", "left"],
    medium: ["left", "center", "left", "center", "left", "center"],
    large: ["left", "center", "right", "left", "center", "right"],
  };

  const getShadowPosition = (index) => {
    if (isAboveMediumScreens) return positions.large[index];
    if (isAboveSmallScreens && !isAboveMediumScreens)
      return positions.medium[index];
    return positions.small[index];
  };

  const modals = [
    { id: "01", title: "Frontend", color: "blue", content: <FrontendText /> },
    { id: "02", title: "Backend", color: "green", content: <BackendText /> },
    {
      id: "03",
      title: "Automation and SCADA",
      color: "yellow",
      content: <AutomationText />,
    },
    { id: "04", title: "Other", color: "pink", content: <OtherText /> },
    {
      id: "05",
      title: "Education",
      color: "orange",
      content: <EducationText />,
    },
    {
      id: "06",
      title: "Future plans",
      color: "white",
      content: <FuturePlansText />,
    },
  ];

  return (
    <section id="skills" className="relative py-12 sm:py-40">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex justify-center items-center ">
        <div className="flex justify-center md:order-2 md:justify-start">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 base-5/12 h-fit mt-10 mx-16  before:absolute before:-top-10 before:-left-10  
          before:w-full before:h-full before:border-2 before:border-lemon before:z-[-1]"
            >
              <img
                alt="skills"
                src={skillsImg}
                className="z-10 w-full  max-w-[400px] "
              />
            </div>
          ) : (
            <div>
              <img
                alt="skills"
                src={skillsImg}
                className="z-10 w-full max-w-[200px] sm:max-w-[400px]"
              />
            </div>
          )}
        </div>

        <motion.div
          className="basis-7/12 text-center md:text-left mt-5 sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <header className="w-fit mx-auto md:mx-0 text-lemon text-nowrap font-playfair font-semibold text-5xl sm:text-6xl">
            <span className="text-white">My </span>SKILLS
            <LineGradient
              width="w-full mt-5 mb-10  sm:mb-10"
              gradientColor="bg-gradient-white-lemon"
            />
          </header>

          <p className="mb-7 text-center sm:text-left items-center ">
            As a dedicated self-taught developer with a strong background in
            automation and SCADA systems, I have honed my expertise primarily in
            frontend technologies, while also building a foundational
            understanding of backend development with Node.js and Express. My
            key strengths include creating responsive and dynamic web
            applications using modern JavaScript frameworks like React. My
            experience with industrial systems has provided me with unique
            insights into user-centered design and efficient problem-solving,
            making me a well-rounded candidate for any development role.
          </p>
        </motion.div>
      </div>
      {/* SKILLS */}

      <motion.div
        className="flex flex-wrap justify-center mt-0 sm:mt-16 gap-y-0 sm:gap-y-10 sm:gap-x-16  md:gap-x-24 w-11/12 sm:w-full"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {modals.map((modal, index) => {
          return (
            <InteractiveModal
              key={modal.id}
              idNumber={modal.id}
              title={modal.title}
              color={modal.color}
              shadowPosition={getShadowPosition(index)}
            >
              {modal.content}
            </InteractiveModal>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MySkills;

import skillsImg from "../assets/img/skills.png";
import InteractiveModal from "../components/InteractiveModal";

import FrontendText from "./MySkills/FrontendText";
import BackendText from "./MySkills/BackendText";
import AutomationText from "./MySkills/AutomationText";
import OtherText from "./MySkills/OtherText";
import EducationText from "./MySkills/EducationText";
import FuturePlansText from "./MySkills/FuturePlansText";
import useMediaQuery from "../hooks/useMediaQuery";

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
    // poprawić margines
    <section id="skills" className="relative pt-24 pb-10 mb-40">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex justify-center items-center mt-10">
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
                className="z-10 w-full max-w-[400px]"
              />
            </div>
          )}
        </div>
        <div className="basis-7/12 text-center md:text-left mt-10">
          <p className="font-playfair font-semibold text-6xl mb-5">
            My<span className="text-lemon">SKILLS</span>
          </p>
          <p className="mt-10 mb-7 text-left items-center">
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
        </div>
      </div>
      {/* SKILLS */}

      <div className="flex flex-wrap justify-center mt-16 sm:gap-16  md:gap-24">
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
      </div>
      <div className="flex justify-between mt-16 md:gap-32"></div>
    </section>
  );
};

export default MySkills;

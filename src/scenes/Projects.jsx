import Project from "../components/Project";
import projectsData from "../assets/data/projects.json";

import portfolioImg from "../assets/img/portfolio.jpg";
import smartGuysImg from "../assets/img/smart-guys.jpg";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Projects({ handleInView }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <InView
      onChange={handleInView}
      threshold={0.5}
      id="projects"
      className="flex flex-col justify-center items-center py-12 sm:py-40"
    >
      {/* HEADINGS */}
      <motion.header
        className="text-white text-nowrap font-playfair font-semibold text-5xl sm:text-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-magenta">PRO</span>JECTS
        <div className="mt-5 mb-10  sm:mb-20">
          <LineGradient
            width="w-full"
            gradientColor="bg-gradient-magenta-white"
          />
        </div>
      </motion.header>

      <motion.div
        className=" w-11/12 sm:w-7/12 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="mb-10 sm:mb-20">
          On this page, you'll find selected projects that showcase my
          experience and skills in web application development. Each one has
          been created with passion and attention to detail, using modern
          technologies and best programming practices. As you browse through
          them, you can learn about the project descriptions, the technologies
          used, and see how they work in practice.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-orange
              w-full h-full  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold border-2 border-transparent"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title={projectsData[0].title}
            summary={projectsData[0].summary}
            technologies={projectsData[0].technologies}
            image={portfolioImg}
          />
          <Project
            title={projectsData[1].title}
            summary={projectsData[1].summary}
            technologies={projectsData[1].technologies}
            image={smartGuysImg}
            href={"https://inen89.github.io/smart-guys-app/"}
          />
          {/* ROW 2 */}
          <Project
            title={projectsData[2].title}
            summary={projectsData[2].summary}
            hasImage={false}
          />
          <Project
            title={projectsData[3].title}
            summary={projectsData[3].summary}
            hasImage={false}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              w-full h-full  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold border-2 border-transparent "
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </InView>
  );
}

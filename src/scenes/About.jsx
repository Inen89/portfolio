import { AnimatePresence, motion } from "framer-motion";

import aboutMeImg from "../assets/img/AboutMe.jpg";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const paragraphStyles =
    "p-4 px-6 rounded-md hover:bg-lime hover:bg-opacity-40";

  const paragraphs = [
    `Hi! My name is Grzegorz Łoś, and programming is my passion, which
          evolved from my early interest in drones and programming them, through
          working in industrial automation systems, to my current path as a web
          developer. In the past, I worked in a drone company as part of a
          programming team. I also earned a drone operator license and designed
          my own huge octocopter. Later, I used drones for photography and
          filming, which gave me valuable experience in both technology and
          creative work.`,

    `For over five years, I worked as an automation engineer, specializing
          in programming and integrating SCADA and PLC systems for companies
          like IKEA, Mondi, Bumech, and the Polish Armed Forces. During this
          time, I honed my analytical skills, learning how to effectively
          diagnose and solve technical issues in industrial environments.
          However, over time, my interests shifted towards web development.`,

    `Currently, I focus on front-end development and create interactive,
          dynamic websites using HTML, CSS, JavaScript, and React. My portfolio,
          which is my first completed project, showcases my skills in building
          responsive and visually appealing user interfaces. In the future, I
          plan to expand it with more advanced projects, such as CRUD
          applications integrated with databases, to better demonstrate my full
          range of abilities.`,

    `In my projects, I use tools like Tailwind CSS and Framer Motion to
          create smooth animations and interactive visual effects. Every project
          is designed with user experience in mind, while I strive to maintain
          code clarity and modularity of components.`,

    `Aside from programming, I’m interested in health and work
          optimization, which stems from my own journey to improve my
          well-being. I aim to balance the intense demands of IT work with
          taking care of both physical and mental health. I’m also passionate
          about Japanese culture, Slavic mythology, personal development, new
          technologies, health, the stock market, and the economy. I believe
          these interests fuel my creativity and adaptability when it comes to
          solving problems, which is a crucial asset in the world of
          programming.`,

    `I’m also planning to grow my skills in backend development and
          full-stack technologies. In the near future, I aim to explore Next.js
          to better manage routes and optimize the performance of my
          applications. Additionally, I want to deepen my knowledge of unit
          testing with React Testing Library to ensure high quality and
          stability in my projects.`,

    `Feel free to explore my portfolio! If you have any questions or would
          like to discuss potential collaboration, feel free to reach out
          through the contact form, which is integrated with FormSubmit and
          powered by react-hook-form. I’d be happy to share my experience and
          ideas for future projects!`,
  ];

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "easeInOut", duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: { type: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-12 py-16 pt-24"
    >
      <h2 className="heading text-6xl mb-10">
        About <span className="text-lime">Me</span>
      </h2>

      <div className="relative flex items-center justify-center w-full h-auto">
        {/* Rotating circle border */}
        <motion.div
          className="absolute border-2 border-x-lime  border-y-transparent rounded-full w-72 aspect-square max-w-[270px] "
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        ></motion.div>

        <img
          src={aboutMeImg}
          alt="Profile"
          className="w-52 aspect-square max-w-[250px] max-h-[250px] rounded-full border-2 border-lime object-cover"
        />
      </div>

      <div className="about-content">
        <h3 className="text-center text-4xl mt-10">Frontend Developer</h3>

        <div className="text-lg tracking-wider leading-relaxed p-8">
          <AnimatePresence>
            {paragraphs
              .slice(0, showMore ? paragraphs.length : 1)
              .map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={paragraphStyles}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {paragraph}
                </motion.p>
              ))}
          </AnimatePresence>
        </div>
        <a
          className="relative block mx-auto w-fit bg-lime border-lime border-4 text-green rounded-lg py-3 px-7 font-semibold z-30
        hover:text-lime
            before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-green before:z-0
            before:transition-all before:duration-500 
            hover:before:w-full hover:before:z-[-1]"
          href={!showMore ? "#about" : null}
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {showMore ? "Show Less" : "Show More"}
        </a>
      </div>
    </section>
  );
}

/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/img/profile-image.jpg";
import SocialMediaIcons from "../components/SocialMediaIcons";
import TextAnim from "../components/TextAnim";
import useMediaQuery from "../hooks/useMediaQuery";
import { delay, motion } from "framer-motion";

export default function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const landingPageImg = (
    <img
      src={profileImg}
      alt="landing-page-image"
      className=" hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] sm:max-w-[400px]  md:max-w-[600px]"
    />
  );
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full  gap-16 py-12 pt-20 sm:py-40"
    >
      {/* IMAGE SECTION */}

      <div className="flex justify-center align-middle basis-3/5  md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative w-8/12 max-w-[600px] ml-10 z-0 hover:shadow-ladning-aqua before:absolute before:border-2
          before:border-aqua before:-top-10 before:-left-10 before:w-full 
            before:max-w-[600px] before:h-full before:z-[-1]"
          >
            {landingPageImg}
          </div>
        ) : (
          <div>{landingPageImg}</div>
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-3xl md:text-5xl lg:text-6xl font-poppins font-semibold text-center md:text-start">
            Hi, I&apos;m Grzegorz Łoś
          </p>
          <div className="flex justify-center md:justify-start">
            <TextAnim />
          </div>
          <h3 className="mt-6 text-center md:text-start">
            Welcome to My Portfolio!
          </h3>
          <p className="mt-2 text-center md:text-start">
            As a passionate frontend developer, I thrive on creating visually
            appealing and user-friendly web applications. With a strong
            foundation in modern technologies and a keen eye for design, I
            strive to bring innovative ideas to life. Explore my projects to see
            how I turn concepts into engaging digital experiences. Whether it’s
            developing interactive UIs, enhancing user experiences, or diving
            into the latest frameworks, I’m always eager to learn and push the
            boundaries of web development.
          </p>
        </motion.div>
        {/* CALL TO ACTION */}
        <motion.div
          className="flex mt-10 gap-6 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="relative bg-aqua border-aqua border-4 text-deep-blue text-center rounded-lg py-3 px-7 font-semibold z-30
          hover:text-aqua
            before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-[#061B18] sm:before:bg-deep-blue before:z-0
            before:transition-all before:duration-500 
            hover:before:w-full hover:before:z-[-1]"
            onClick={() => setSelectedPage("contact")}
            href="#about"
          >
            Get to Know Me
          </AnchorLink>
          <AnchorLink
            className="relative rounded-lg border-aqua border-4 text-aqua text-center py-3 px-10 font-semibold z-30
                      hover:text-deep-blue
                      before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-aqua before:transition-all before:duration-500 before:z-0
                      before:hover:w-full before:hover:z-[-1]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let&apos;s Talk
          </AnchorLink>
        </motion.div>
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

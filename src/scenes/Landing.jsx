/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/img/profile-image.jpg";
import SocialMediaIcons from "../components/SocialMediaIcons";
import TextAnim from "../components/TextAnim";

export default function Landing({ setSelectedPage }) {
  const landingPageImg = (
    <img
      src={profileImg}
      alt="landing-page-image"
      className="w-full max-w-[400px] max-h-[600px] hover:saturate-200 transition duration-500"
    />
  );
  return (
    <section
      id="home"
      className="flex justify-between items-center h-full gap-16 py-48"
    >
      {/* MAIN SECTION */}
      <div className="basis-2/5 mt-32">
        {/* HEADINGS */}
        <div>
          <p className="text-6xl font-poppins font-semibold text-start">
            Hi, I&apos;m Grzegorz Łoś
          </p>
          <div>
            <TextAnim />
          </div>
          <h3 className="mt-6">Welcome to My Portfolio!</h3>
          <p className="mt-2 text-start">
            As a passionate frontend developer, I thrive on creating visually
            appealing and user-friendly web applications. With a strong
            foundation in modern technologies and a keen eye for design, I
            strive to bring innovative ideas to life. Explore my projects to see
            how I turn concepts into engaging digital experiences. Whether it’s
            developing interactive UIs, enhancing user experiences, or diving
            into the latest frameworks, I’m always eager to learn and push the
            boundaries of web development.
          </p>
        </div>
        {/* CALL TO ACTION */}
        <div className="flex mt-10 gap-6 justify-center">
          <AnchorLink
            className="relative bg-aqua border-aqua border-4 text-deep-blue rounded-lg py-3 px-7 font-semibold z-30
          hover:text-aqua
            before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-deep-blue before:z-0
            before:transition-all before:duration-500 
            hover:before:w-full hover:before:z-[-1]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="relative rounded-lg border-aqua border-4 text-aqua py-3 px-10 z-30
                      hover:text-deep-blue
                      before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-aqua before:transition-all before:duration-500 before:z-0
                      before:hover:w-full before:hover:z-[-1]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let&apos;s Talk
          </AnchorLink>
        </div>
        <div className="mt-10">
          <SocialMediaIcons />
        </div>
      </div>
      {/* IMAGE SECTION */}
      <div className="flex justify-center basis-3/5 mt-32">
        <div
          className="relative w-8/12 max-w-[400px] ml-10 z-0 hover:shadow-ladning-aqua before:absolute before:border-2
          before:border-aqua before:-top-10 before:-left-10 before:w-full 
            before:max-w-[400px] before:h-full before:z-[-1]"
        >
          {landingPageImg}
        </div>
      </div>
    </section>
  );
}

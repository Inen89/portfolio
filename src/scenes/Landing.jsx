/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/profile-image.jpg";
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
    <section className="flex justify-between items-center h-full gap-16 py-10">
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
          <p className="mt-6 text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            nihil temporibus quasi ratione modi sed, veritatis, quaerat magnam
            corporis veniam exercitationem magni voluptate deserunt eum et
            aliquam cum. Hic, quibusdam!
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
                      before:contet-[''] before:absolute before:inset-0 before:w-0 before:bg-aqua before:transition-all before:duration-500 before:z-0
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

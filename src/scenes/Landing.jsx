import profileImg from "../assets/profile-image.jpg";

export default function Landing() {
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
            Hi, I'm Grzegorz Łoś
          </p>
          <p className="mt-6">FRONTEND DEVELOPER</p>
          <p className="mt-6 text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            nihil temporibus quasi ratione modi sed, veritatis, quaerat magnam
            corporis veniam exercitationem magni voluptate deserunt eum et
            aliquam cum. Hic, quibusdam!
          </p>
        </div>
        {/* CALL TO ACTION */}
        <div className="flex mt-10 gap-6 justify-center">
          <button className="bg-aqua p-2 rounded-md text-black">
            Contact Me
          </button>
          <button className="bg-aqua p-2 rounded-md text-black">
            Let's Talk
          </button>
        </div>
      </div>
      {/* IMAGE SECTION */}
      <div className="flex justify-center basis-3/5 mt-32">
        <div
          className="relative w-8/12 ml-10 z-0 before:absolute before:border-2
          before:border-aqua before:-top-10 before:-left-10 before:w-full 
            before:max-w-[400px] before:h-full before:z-[-1]"
        >
          {landingPageImg}
        </div>
      </div>
    </section>
  );
}

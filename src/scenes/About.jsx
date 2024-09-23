import { motion } from "framer-motion";

import aboutMeImg from "../assets/img/AboutMe.jpg";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  let content = (
    <p className="text-center p-8">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias molestiae
      neque, distinctio nemo dolore quasi temporibus aperiam sit, nihil pariatur
      harum dignissimos. Fuga quae magnam distinctio eius delectus cumque
      dolores sit iusto fugit. Reiciendis vel minima debitis vitae, perferendis
      inventore!
    </p>
  );
  if (showMore) {
    content = (
      <p className="text-center p-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        obcaecati veritatis recusandae quas exercitationem nihil minima,
        adipisci molestiae esse consequuntur commodi velit cumque quam,
        perferendis accusantium nam nemo, voluptatem quaerat. Incidunt,
        molestiae ratione consequatur consequuntur alias voluptatem tempora quas
        a nesciunt distinctio nihil sit pariatur aliquam voluptate natus?
        Facilis repudiandae cumque quia sapiente suscipit omnis similique dolore
        quod, temporibus at aut minus laudantium id esse? Distinctio aspernatur
        corporis eveniet, nisi maiores ab quia rem mollitia sed? Fuga officiis
        accusantium reprehenderit, eligendi facere nihil voluptate, ipsa ducimus
        rerum adipisci atque architecto blanditiis, odio tempore eum. Error
        earum explicabo maiores quas soluta recusandae quod perferendis
        possimus? Odio quod pariatur deleniti repellat rerum sapiente vitae nam
        vel officia, delectus, nesciunt accusamus. Perferendis ducimus, magnam
        ratione iste cupiditate tenetur provident quia ab nostrum quis
        quibusdam, expedita nihil officiis ipsa repudiandae architecto enim nemo
        illo corporis veritatis. Libero nostrum numquam labore doloremque?
        Velit, accusantium veritatis! Ratione at exercitationem nemo corporis
        dolorem, provident a quo obcaecati!
      </p>
    );
  }

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-12 py-16"
    >
      <h2 className="heading text-6xl mb-10">
        About <span className="text-lime">Me</span>
      </h2>

      <div className="relative flex items-center justify-center w-full h-auto">
        {/* Rotating circle border */}
        <motion.div
          className="absolute border-2 border-x-lime  border-y-transparent rounded-full w-3/12 aspect-square max-w-[270px] "
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

        {content}
      </div>
      <button
        className="relative bg-lime border-lime border-4 text-green rounded-lg py-3 px-7 font-semibold z-30
        hover:text-lime
            before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-green before:z-0
            before:transition-all before:duration-500 
            hover:before:w-full hover:before:z-[-1]"
        onClick={() => setShowMore((prevState) => !prevState)}
      >
        Show More
      </button>
    </section>
  );
}

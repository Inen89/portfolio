import { useState } from "react";
import Link from "../components/Link";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const navBackground = isTopOfPage ? "bg-blue" : "bg-deep-blue";
  const logoFill = isTopOfPage ? "text-blue" : "text-deep-blue";
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav
      className={`${navBackground} w-full fixed top-0 p-1 sm:px-0 sm:py-6 z-40`}
    >
      <div className="flex items-center justify-between mx-auto w-11/12 sm:w-5/6 pe-4 ">
        <div
          className={`${logoFill} text-2xl sm:text-3xl font-poppins font-bold text-stroke-aqua `}
        >
          GŁ
        </div>
        {isDesktop ? (
          <div className="flex gap-8 lg:gap-16 font-poppins font-semibold ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-md border-[0.15rem]  border-aqua bg-transparent p-0 hover:brightness-125 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <div className="w-6 p-1 px-1 h-5 flex flex-col justify-between ">
              <span className="block w-full h-[0.1rem] bg-aqua"></span>
              <span className="block w-full h-[0.1rem] bg-aqua"></span>
              <span className="block w-full h-[0.1rem] bg-aqua"></span>
            </div>
          </button>
        )}
        {!isDesktop && isMenuToggled && (
          <motion.div
            className="absolute top-full right-0 pt-2 pb-4 px-4 flex flex-col items-start gap-3 bg-deep-blue min-w-fit w-2/12 text-lg font-bold overflow-hidden rounded-sm shadow-md "
            variants={{
              hidden: { opacity: 0, height: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                height: "auto",
                transition: { duration: 0.2, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
}

import AnchorLink from "react-anchor-link-smooth-scroll";

const selectedStyles = `relative bg-aqua before:absolute before:w-6 before:h-6  
    before:left-[-50%] before:top-[-50%] before:rounded-full before:border-2 before:border-aqua`;

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed  top-[60%] right-2.5 sm:right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-cyan-700"
        } w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-cyan-700"
        } w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-cyan-700"
        } w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-cyan-700"
        } w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-cyan-700"
        } w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;

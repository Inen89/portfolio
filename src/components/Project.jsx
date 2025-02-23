export default function Project({
  title,
  summary,
  technologies,
  hasImage = true,
  image,
  href,
}) {
  let opacity =
    hasImage === false
      ? "opacity-100 hover:opacity-100"
      : "opacity-0 hover:opacity-100";

  const overlayStyles = `absolute  h-full w-full ${opacity}  transition duration-500
    bg-gray-400 z-30 flex flex-col justify-center items-center text-center  p-2 px-2 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  const Wrapper = href ? "a" : "button"; // Dynamiczny wybór elementu
  return (
    <Wrapper
      className="relative w-full h-full  max-w-[400px] max-h-[400px] aspect-[1/0.8] border-transparent outline-2 hover:outline-magenta hover:shadow-neon-pink hover:animate-pulse-once"
      href={href || undefined} // href tylko, jeśli jest podane
      target={href ? "_blank" : undefined} // Otwieraj w nowej karcie, jeśli href jest
      rel={href ? "noopener noreferrer" : undefined} // Dla bezpieczeństwa
    >
      <div className="relative w-full h-fit max-w-full aspect-[1/0.8] border-transparent outline-2 hover:outline-magenta  hover:shadow-neon-pink hover:animate-pulse-once ">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="my-4 overflow-y-auto px-2 text-sm md:text-base ">
            {summary}
          </p>
          <p className="text-wrap w-full ">
            {technologies && technologies.length > 0
              ? technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-yellow p-1 px-2 mx-1 mb-2 rounded-md inline-block text-xs md:text-sm hover:bg-magenta hover:bg-opacity-30 hover:shadow-neon-pink-sm hover:text-black"
                  >
                    {technology}
                  </span>
                ))
              : null}
          </p>
        </div>
        {hasImage !== "false" && (
          <img
            className="object-fill w-full h-full"
            src={image}
            alt={projectTitle}
          />
        )}
      </div>
    </Wrapper>
  );
}

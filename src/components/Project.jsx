export default function Project({
  title,
  summary,
  technologies,
  hasImage = true,
  image,
}) {
  let opacity =
    hasImage === false
      ? "opacity-100 hover:opacity-100"
      : "opacity-0 hover:opacity-100";

  const overlayStyles = `absolute min-h-60 h-full w-full ${opacity}  transition duration-500
    bg-gray-400 z-30 flex flex-col justify-center items-center text-center p-4 px-3 text-deep-blue `;

  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <div className="relative w-full h-full max-w-full aspect-[1/0.8] border-transparent outline-2 hover:outline-magenta  hover:shadow-neon-pink hover:animate-pulse-once ">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="my-4 overflow-y-auto px-2 ">{summary}</p>
        <p className="text-wrap w-full ">
          {technologies && technologies.length > 0
            ? technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-yellow p-1 px-2 mx-1 mb-2 rounded-md inline-block hover:bg-magenta hover:shadow-neon-pink-sm hover:text-grey"
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
  );
}

import Project from "../components/Project";
import projectsData from "../assets/data/projects.json";

import portfolioImg from "../assets/img/portfolio.jpg";

export default function Projects() {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <div className="w-7/12 mx-auto text-center">
        <div>
          <p className="font-playfair font-semibold text-6xl">
            <span className="text-magenta">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-10 mb-20">
          On this page, you'll find selected projects that showcase my
          experience and skills in web application development. Each one has
          been created with passion and attention to detail, using modern
          technologies and best programming practices. As you browse through
          them, you can learn about the project descriptions, the technologies
          used, and see how they work in practice.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-1 ">
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-orange
              w-full h-full text-2xl font-playfair font-semibold border-2 border-transparent"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title={projectsData[0].title}
            summary={projectsData[0].summary}
            technologies={projectsData[0].technologies}
            image={portfolioImg}
          />
          <Project
            title={projectsData[1].title}
            summary={projectsData[1].summary}
            hasImage={false}
          />
          {/* ROW 2 */}
          <Project
            title={projectsData[2].title}
            summary={projectsData[2].summary}
            hasImage={false}
          />
          <Project
            title={projectsData[3].title}
            summary={projectsData[3].summary}
            hasImage={false}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              w-full h-full text-2xl font-playfair font-semibold border-0 border-transparent"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </div>
      </div>
    </section>
  );
}

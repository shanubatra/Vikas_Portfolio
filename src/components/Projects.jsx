import React from "react";
import Footer from "./Footer";
import { project } from "./Constant";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.links}
            play={item.play}
            app={item.app}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Projects;

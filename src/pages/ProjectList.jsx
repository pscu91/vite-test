import ProjectCard from "../assets/ProjectCard";
import CreateCard from "../assets/CreateCard";
import Filter from "../assets/Filter";
import { projectData } from "../data/ProjectData";
import PageTitle from "../assets/PageTitle";

function ProjectList() {
  return (
    <div>
      <PageTitle>Our Projects</PageTitle>
      <Filter />
      <div className="flex w-full flex-wrap justify-center md:justify-start">
        <CreateCard />
        {projectData
          .slice()
          .reverse()
          .map((index) => (
            <ProjectCard key={index.id} index={index} />
          ))}
      </div>
    </div>
  );
}

export default ProjectList;

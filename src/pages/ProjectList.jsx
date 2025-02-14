import { motion } from "framer-motion";
import ProjectCard from "../assets/ProjectCard";
import CreateCard from "../assets/CreateCard";
import Filter from "../assets/Filter";
import { projectData } from "../data/ProjectData";

function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="my-8 text-6xl font-extrabold tracking-tight">
        <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Projects
        </span>
      </div>
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
    </motion.div>
  );
}

export default ProjectList;

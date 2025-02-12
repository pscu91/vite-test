import { motion } from "framer-motion";
import ProjectCard from "../assets/ProjectCard";
import CreateCard from "../assets/CreateCard";
import Filter from "../assets/Filter";

function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Filter />
      <div className="flex w-full flex-wrap justify-center md:justify-start">
        <CreateCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.div>
  );
}

export default ProjectList;

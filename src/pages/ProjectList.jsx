import { motion } from "framer-motion";
import ProjectCard from "../assets/ProjectCard.jsx";
import CreateCard from "../assets/CreateCard.jsx";

function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="m-auto mb-4 flex w-fit items-center gap-6 rounded-full bg-slate-50 px-8 py-4 text-xl">
        <h2 className="font-medium">Categories</h2>
        <ul className="[&>*]:border-sky-500/15 flex gap-2 font-medium text-purple-500 [&>*]:rounded-full [&>*]:border [&>*]:border-purple-100 [&>*]:bg-purple-50 [&>*]:bg-purple-500/10 [&>*]:px-4 [&>*]:py-0.5 [&>*]:transition-colors [&>*]:hover:cursor-pointer">
          <li className="hover:bg-purple-500 hover:text-white">Sales</li>
          <li className="hover:bg-purple-500 hover:text-white">Marketing</li>
          <li className="hover:bg-purple-500 hover:text-white">SEO</li>
        </ul>
      </div>
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

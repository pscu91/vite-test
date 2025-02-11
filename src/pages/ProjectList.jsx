import { motion } from "framer-motion";
import ThumbnailCard from "../assets/ThumbnailCard.jsx";
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
        <ul className="[&>*]:border-sky-500/15 flex gap-2 font-medium text-purple-500 [&>*]:rounded-full [&>*]:border [&>*]:border-purple-100 [&>*]:bg-purple-50 [&>*]:bg-purple-500/10 [&>*]:px-2 [&>*]:py-0.5 [&>*]:hover:cursor-pointer">
          <li>Sales</li>
          <li>Marketing</li>
          <li>SEO</li>
        </ul>
      </div>
      <div className="flex w-full flex-wrap justify-center md:justify-start">
        <CreateCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
      </div>
    </motion.div>
  );
}

export default ProjectList;

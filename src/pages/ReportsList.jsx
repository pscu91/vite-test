import { motion } from "framer-motion";
import ReportCard from "../assets/ReportCard";
import SearchBar from "../assets/SearchBar";

function ReportsList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="my-8 text-6xl font-extrabold tracking-tight">
        <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Research Reports
        </span>
      </div>
      <SearchBar />
      <div className="flex flex-wrap p-4 xl:px-24 xxxl:px-48">
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </div>
    </motion.div>
  );
}

export default ReportsList;

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

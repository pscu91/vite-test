import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ReportCard from "../assets/ReportCard.jsx";

function ReportsList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-8">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute translate-x-3 translate-y-2/3 transform select-none text-gray-400"
        />
        <input
          className="w-full rounded-lg border-2 border-slate-300 px-8 py-1 placeholder:italic placeholder:text-gray-500 xl:w-3/5 xxl:w-2/5 xxxl:mb-4"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
      <div className="flex flex-wrap p-4">
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

import { motion } from "framer-motion";
import MemberCard from "../assets/MemberCard";
import { memberData } from "../data/MemberData";

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="mb-8 text-6xl font-extrabold tracking-tight">
          <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Who we are
          </span>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-12 p-4">
          {memberData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;

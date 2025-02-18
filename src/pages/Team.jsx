import { motion } from "framer-motion";
import { memberData } from "../data/MemberData";
import MemberCard from "../assets/MemberCard";
import PageTitle from "../assets/PageTitle";

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageTitle>Who we are</PageTitle>
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="flex w-full flex-wrap justify-center gap-12 p-8 lg:p-4">
          {memberData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;

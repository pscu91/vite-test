import { motion } from "framer-motion";

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center">
        <p className="mt-16">Who we are</p>
      </div>
    </motion.div>
  );
}

export default Team;

import { motion } from "framer-motion";
import NotFoundImg from "../assets/img/NotFoundImg.png";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      <div className="flex flex-col items-center justify-center gap-8 pt-24">
        <img className="w-1/3" src={NotFoundImg} />
        <p className="pl-8 text-xl font-semibold">404 not found page</p>
      </div>
    </motion.div>
  );
}

export default NotFound;

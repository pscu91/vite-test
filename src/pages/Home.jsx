import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 text-5xl font-extrabold leading-none tracking-tight">
        <span class="bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 leading-[3.5rem] text-white">
          Hello
          <br />
          World
        </span>
      </div>
      <button class="focus:ring-opacity-75; rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
        Click me
      </button>
    </motion.div>
  );
}

export default Home;

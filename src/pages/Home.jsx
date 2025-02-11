import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-home flex h-full lg:pb-96"
    >
      <div className="m-auto flex h-1/4 w-1/2 transform flex-col items-center justify-center rounded-3xl bg-white/50 drop-shadow-xl backdrop-blur-lg transition-transform hover:skew-y-12">
        <div className="mb-8 text-6xl font-extrabold leading-none tracking-tight transition-all hover:blur-md">
          <span className="select-none bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Hello World
          </span>
        </div>
        <button className="focus:ring-opacity-75; w-fit transform rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
          Click me
        </button>
      </div>
    </motion.div>
  );
}

export default Home;

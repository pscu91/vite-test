import PageTitle from "../assets/PageTitle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-full bg-home bg-cover px-8 pb-40 lg:px-0">
      <div className="m-auto flex h-fit w-fit transform flex-col items-center justify-center rounded-3xl bg-white/50 p-12 drop-shadow-xl backdrop-blur-lg transition-transform hover:skew-y-12">
        <div className="mb-8 text-6xl font-extrabold leading-none tracking-tight transition-all hover:blur-md">
          <PageTitle>Hello World</PageTitle>
        </div>
        <blockquote className="mb-8 text-center text-2xl font-semibold italic text-slate-900">
          When you look
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time,
          <br />
          people think that you're busy.
        </blockquote>
        <Link to="/realtime-table">
          <button className="focus:ring-opacity-75; w-fit transform rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
            Realtime DB
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

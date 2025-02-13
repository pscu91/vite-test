import { motion } from "framer-motion";
import { memberData } from "../data/MemberData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const userData = memberData.find((member) => member.id === 1);

function Contributors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      <form className="m-auto max-w-lg pt-20 text-left">
        <div className="mb-6 flex flex-col items-center gap-2">
          <p className="block text-xs font-bold uppercase tracking-wide text-slate-800">
            Profile Pic
          </p>
          <img className="h-auto w-20 rounded-full" src={userData.image} />
          <button className="text-sm">Change</button>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
              for="grid-name"
            >
              Name
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="grid-name"
              type="text"
              placeholder="Jane"
              value={userData.name}
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
              for="grid-position"
            >
              Position
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="pointer-events-none absolute right-3 top-3 z-10 transform pt-0.5 text-purple-600"
              />
              <select
                className="relative block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 pr-8 leading-tight text-slate-800 focus:border-slate-800 focus:bg-white focus:outline-none"
                id="grid-state"
                value={userData.position}
              >
                <option>CEO</option>
                <option>CTO</option>
                <option>Product Engineer</option>
                <option>Product Designer</option>
                <option>Product Marketer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="pl-1 text-xs italic text-gray-600">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
              for="grid-email"
            >
              Email
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="grid-email"
              type="text"
              placeholder="*****@***.com"
              value={userData.email}
            />
          </div>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
              for="grid-introduce"
            >
              Introduce
            </label>
            <textarea
              className="mb-3 block h-full min-h-[100px] w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="grid-introduce"
              type="text"
              placeholder="Write an introductory sentence..."
              value={userData.description}
            />
          </div>
        </div>
        <div className="flex">
          <button className="mt-8 bg-purple-600 px-12 text-white">Save</button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contributors;

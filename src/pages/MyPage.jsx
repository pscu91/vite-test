import { memberData } from "../data/MemberData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const userData = memberData.find((member) => member.id === 1);

const FormField = ({
  label,
  id,
  type,
  placeholder,
  value,
  options,
  className = "",
}) => {
  const baseInputClass =
    "block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none mb-3";

  return (
    <div className={`w-full px-3 ${className}`}>
      <label
        className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "select" ? (
        <div className="relative">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="pointer-events-none absolute right-3 top-3 z-10 transform pt-0.5 text-purple-600"
          />
          <select className={`${baseInputClass} pr-8`} id={id} value={value}>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      ) : type === "textarea" ? (
        <textarea
          className={`${baseInputClass} min-h-[100px]`}
          id={id}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          className={baseInputClass}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
};

function Contributors() {
  const positions = [
    "CEO",
    "CTO",
    "Product Engineer",
    "Product Designer",
    "Product Marketer",
  ];

  return (
    <div>
      <form className="m-auto max-w-lg pt-20 text-left">
        <div className="mb-6 flex flex-col items-center gap-2">
          <p className="block text-xs font-bold uppercase tracking-wide text-slate-800">
            Profile Pic
          </p>
          <img
            className="h-auto w-20 rounded-full"
            src={userData.image}
            alt={userData.name}
          />
          <button className="text-sm">Change</button>
        </div>

        <div className="mb-6 flex flex-wrap">
          <FormField
            label="Name"
            id="grid-name"
            type="text"
            placeholder="Jane"
            value={userData.name}
            className="md:w-1/2"
          />
          <FormField
            label="Position"
            id="grid-position"
            type="select"
            value={userData.position}
            options={positions}
            className="md:w-1/2"
          />
        </div>

        <FormField
          label="Password"
          id="grid-password"
          type="password"
          placeholder="******************"
        />

        <FormField
          label="Email"
          id="grid-email"
          type="email"
          placeholder="*****@***.com"
          value={userData.email}
        />

        <FormField
          label="Introduce"
          id="grid-introduce"
          type="textarea"
          placeholder="Write an introductory sentence..."
          value={userData.description}
        />

        <div className="flex">
          <button className="mt-8 rounded bg-purple-600 px-12 py-2 text-white transition-colors hover:bg-purple-700">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contributors;

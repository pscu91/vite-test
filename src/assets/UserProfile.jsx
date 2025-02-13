import { memberData } from "../data/MemberData";
import { Link } from "react-router-dom";

const userData = memberData.find((member) => member.id === 1);

function UserProfile() {
  return (
    <>
      <div className="mb-6 mt-8 flex flex-col gap-2 rounded-xl bg-white p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={userData.image}
          alt={userData.name}
        />
        <div className="space-y-2 truncate text-center sm:text-left">
          <p className="truncate text-lg font-semibold text-black">
            {userData.name}
          </p>
          <p className="truncate font-medium text-gray-500">
            {userData.position}
          </p>
          <Link to="/mypage">
            <button className="rounded-full border-purple-200 bg-white px-4 py-1 text-purple-600 transition-colors hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-500 active:bg-purple-700">
              My Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

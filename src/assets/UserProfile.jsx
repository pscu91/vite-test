import { memberData } from "../data/MemberData";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const userData = memberData.find((member) => member.id === 1);

function UserProfile() {
  const modalRef = useRef();

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
          <div className="flex items-center gap-2">
            <Link to="/mypage">
              <button className="rounded-full border-purple-200 bg-white px-4 py-1 text-purple-600 transition-colors hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-500 active:bg-purple-700">
                My Page
              </button>
            </Link>
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                onClick={() => modalRef.current.showModal()}
                className="p-2 text-slate-600 hover:cursor-pointer hover:text-purple-600"
              />
              <dialog
                ref={modalRef}
                className="rounded-xl px-12 py-8 text-lg font-semibold outline-none backdrop:bg-purple-950 backdrop:opacity-70 backdrop:backdrop-blur-lg"
              >
                <p className="mb-4 text-2xl">Do you really want to log out?</p>
                <div className="m-auto flex w-fit gap-4">
                  <button
                    onClick={() => modalRef.current.close()} // 📍 모달 닫기
                    className="mx-auto bg-white px-5 py-2 outline-none"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => modalRef.current.close()} // 📍 모달 닫기
                    className="mx-auto bg-purple-400 px-5 py-2 text-white outline-none"
                  >
                    Confirm
                  </button>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

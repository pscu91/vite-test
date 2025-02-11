import erinProfilePic from "./img/erin.jpg";

function UserProfile() {
  return (
    <>
      <div className="mb-4 flex flex-col gap-2 rounded-xl bg-white p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={erinProfilePic}
          alt="erin profile pic"
        />
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-lg font-semibold text-black">Erin Lindford</p>
          <p className="font-medium text-gray-500">Product Engineer</p>
          <button className="rounded-full border-purple-200 bg-white px-4 py-1 text-purple-600 transition-colors hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-500 active:bg-purple-700">
            My Page
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

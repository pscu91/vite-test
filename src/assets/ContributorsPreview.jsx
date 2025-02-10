import contributorsProfilePic1 from "./img/contributorsProfilePic1.avif";
import contributorsProfilePic2 from "./img/contributorsProfilePic2.avif";
import contributorsProfilePic3 from "./img/contributorsProfilePic3.avif";
import contributorsProfilePic4 from "./img/contributorsProfilePic4.avif";
import contributorsProfilePic5 from "./img/contributorsProfilePic5.avif";

function ContributorsPreview() {
  return (
    <>
      <div className="mb-8 pl-8">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Contributors</p>
          <span className="flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            204
          </span>
        </div>
        <div className="mt-3 flex flex-row flex-col items-start gap-2">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="contributors-preview-profile-img"
              src={contributorsProfilePic1}
              alt="contributors profile pic"
            />
            <img
              className="contributors-preview-profile-img"
              src={contributorsProfilePic2}
              alt="contributors profile pic"
            />{" "}
            <img
              className="contributors-preview-profile-img"
              src={contributorsProfilePic3}
              alt="contributors profile pic"
            />{" "}
            <img
              className="contributors-preview-profile-img"
              src={contributorsProfilePic4}
              alt="contributors profile pic"
            />{" "}
            <img
              className="contributors-preview-profile-img"
              src={contributorsProfilePic5}
              alt="contributors profile pic"
            />
          </div>
          <div className="text-left text-sm font-medium">
            <a
              href="#"
              className="w-fit rounded-md px-2 py-1 text-slate-500 hover:bg-purple-100"
            >
              + 198 others
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContributorsPreview;

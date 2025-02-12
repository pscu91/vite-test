import TeamFace1 from "./img/TeamFace1.png";
import TeamFace2 from "./img/TeamFace2.png";
import TeamFace3 from "./img/TeamFace3.png";
import TeamFace4 from "./img/TeamFace4.png";
import TeamFace5 from "./img/TeamFace5.png";

function ContributorsPreview() {
  return (
    <>
      <div className="py-4 pl-8">
        <div className="flex items-center gap-2">
          <p className="select-none font-semibold">Contributors</p>
          <span className="flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            204
          </span>
        </div>
        <div className="mt-3 flex flex-row flex-col items-start gap-2">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="contributors-wrap">
              <img
                className="contributors-preview-profile-img"
                src={TeamFace1}
                alt="contributors profile pic"
              />
              <div className="tooltip text-slate-800">Hoyeon Lee</div>
            </div>
            <div className="contributors-wrap">
              <img
                className="contributors-preview-profile-img"
                src={TeamFace2}
                alt="contributors profile pic"
              />
              <div className="tooltip text-slate-800">Seoyeon Park</div>
            </div>
            <div className="contributors-wrap">
              <img
                className="contributors-preview-profile-img"
                src={TeamFace3}
                alt="contributors profile pic"
              />
              <div className="tooltip text-slate-800">Dowoom Kim</div>
            </div>
            <div className="contributors-wrap">
              <img
                className="contributors-preview-profile-img"
                src={TeamFace4}
                alt="contributors profile pic"
              />
              <div className="tooltip text-slate-800">Yeondoo Hwang</div>
            </div>
            <div className="contributors-wrap">
              <img
                className="contributors-preview-profile-img"
                src={TeamFace5}
                alt="contributors profile pic"
              />
              <div className="tooltip text-slate-800">Shinwoo Ji</div>
            </div>
          </div>
          <div className="mt-1 text-left text-sm font-medium">
            <a
              href="#"
              className="w-fit rounded-md px-2 py-1 text-slate-500 transition-colors hover:bg-purple-100"
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

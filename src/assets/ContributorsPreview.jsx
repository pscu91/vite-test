import ContributorsPreviewItem from "./ContributorsPreviewItem";
import { memberData } from "../data/MemberData";
import { Link } from "react-router-dom";

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

        <div className="mt-3 flex flex-col items-start gap-2">
          <div className="flex -space-x-2 overflow-hidden">
            {memberData.slice(0, 5).map((member) => (
              <ContributorsPreviewItem key={member.id} member={member} />
            ))}
          </div>
          <div className="mt-1 text-left text-sm font-medium">
            <Link
              to="/contributors"
              className="w-fit rounded-md px-2 py-1 text-slate-500 transition-colors hover:bg-purple-100"
            >
              + 198 others
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContributorsPreview;

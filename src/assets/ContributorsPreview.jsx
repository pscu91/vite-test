import ContributorsPreviewItem from "./ContributorsPreviewItem";
import UseMembers from "../hooks/UseMembers";
import { Link } from "react-router-dom";

function ContributorsPreview() {
  const { members, loading, error } = UseMembers();

  if (loading) {
    return <div className="py-4 text-center">로딩 중...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">에러: {error}</div>;
  }

  const previewMembers = members.slice(0, 5);
  const remainingCount = Math.max(0, members.length - 5);

  return (
    <>
      <div className="py-4 pl-8">
        <div className="flex items-center gap-2">
          <p className="select-none font-semibold">Contributors</p>
          <span className="flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            {members.length}
          </span>
        </div>

        <div className="mt-3 flex flex-col items-start gap-2">
          <div className="flex -space-x-2 overflow-hidden">
            {previewMembers.map((member) => (
              <ContributorsPreviewItem key={member.id} member={member} />
            ))}
          </div>
          <div className="mt-1 text-left text-sm font-medium">
            <Link
              to="/contributors"
              className="w-fit rounded-md px-2 py-1 text-slate-500 transition-colors hover:bg-purple-100"
            >
              + {remainingCount} others
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContributorsPreview;

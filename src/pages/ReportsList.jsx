import ReportCard from "../assets/ReportCard.jsx";

function ReportsList() {
  return (
    <>
      <input
        className="mb-8 rounded-lg border-2 border-slate-300 px-4 py-1 placeholder:italic placeholder:text-gray-500"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
      <div className="flex flex-wrap gap-6 p-4">
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </div>
    </>
  );
}

export default ReportsList;

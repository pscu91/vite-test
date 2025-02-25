import ReportCard from "../assets/ReportCard";
import SearchBar from "../assets/SearchBar";
import PageTitle from "../assets/PageTitle";

function ReportsList() {
  return (
    <div>
      <PageTitle>Research Reports</PageTitle>
      <SearchBar />
      <div className="flex flex-wrap p-4 xl:px-24 xxxl:px-48">
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </div>
    </div>
  );
}

export default ReportsList;

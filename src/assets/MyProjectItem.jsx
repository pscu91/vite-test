import { projectData } from "../data/ProjectData";
import { Link } from "react-router-dom";

function MyProjectItem({ children }) {
  const indexData = projectData.find((item) => item.title === children);

  return (
    <>
      <Link
        to={`/vite-test/project/page/${indexData.id}`}
        className="truncate rounded-md pl-1 hover:underline"
      >
        {children}
      </Link>
    </>
  );
}

export default MyProjectItem;

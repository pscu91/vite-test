import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <nav className="flex justify-center space-x-12 border-slate-100 pb-4">
        <Link className="category-contents-style" to="/">
          Home
        </Link>
        <Link className="category-contents-style" to="/team">
          Team
        </Link>
        <Link className="category-contents-style" to="/project">
          Project
        </Link>
        <Link className="category-contents-style" to="/reports">
          Reports
        </Link>
      </nav>
    </>
  );
}

export default Category;

import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <nav className="flex justify-center space-x-8 border-slate-100 py-6 lg:space-x-12">
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

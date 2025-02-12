import { Link } from "react-router-dom";

function CategoryItem({ children, to }) {
  return (
    <Link className="category-contents-style" to={to}>
      {children}
    </Link>
  );
}

export default CategoryItem;

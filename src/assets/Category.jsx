import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <>
      <nav className="flex justify-center space-x-8 border-slate-100 py-6 lg:space-x-12">
        <CategoryItem to="/">Home</CategoryItem>
        <CategoryItem to="/team">Team</CategoryItem>
        <CategoryItem to="/project">Project</CategoryItem>
        <CategoryItem to="/reports">Reports</CategoryItem>
      </nav>
    </>
  );
}

export default Category;

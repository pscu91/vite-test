import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <>
      <nav className="flex justify-center border-slate-100 pb-4 pt-6 sm:py-4">
        <CategoryItem to="/">Home</CategoryItem>
        <CategoryItem to="/team">Team</CategoryItem>
        <CategoryItem to="/project">Project</CategoryItem>
        <CategoryItem to="/kanban">Kanban</CategoryItem>
        <CategoryItem to="/reports">Reports</CategoryItem>
      </nav>
    </>
  );
}

export default Category;

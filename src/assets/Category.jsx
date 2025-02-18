import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <>
      <nav className="flex justify-center border-slate-100 pb-4 pt-6 sm:py-4">
        <CategoryItem to="/vite-test/">Home</CategoryItem>
        <CategoryItem to="/vite-test/team">Team</CategoryItem>
        <CategoryItem to="/vite-test/project">Project</CategoryItem>
        <CategoryItem to="/vite-test/kanban">Kanban</CategoryItem>
        <CategoryItem to="/vite-test/reports">Reports</CategoryItem>
      </nav>
    </>
  );
}

export default Category;

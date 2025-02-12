import FilterItem from "./FilterItem.jsx";

function Filter() {
  return (
    <>
      <div className="m-auto mb-4 flex w-fit items-center gap-6 rounded-full bg-slate-50 px-8 py-4 text-xl">
        <h2 className="font-medium">Categories</h2>
        <ul className="[&>*]:border-sky-500/15 flex gap-2 font-medium text-purple-500 [&>*]:rounded-full [&>*]:border [&>*]:border-purple-100 [&>*]:bg-purple-50 [&>*]:bg-purple-500/10 [&>*]:px-4 [&>*]:py-0.5 [&>*]:transition-colors [&>*]:hover:cursor-pointer">
          <FilterItem href="/#">Sales</FilterItem>
          <FilterItem href="/#">Marketing</FilterItem>
          <FilterItem href="/#">SEO</FilterItem>
        </ul>
      </div>
    </>
  );
}

export default Filter;

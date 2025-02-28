import FilterItem from "./FilterItem";

function Filter() {
  return (
    <>
      <div className="mx-6 mb-4 flex flex-col items-center gap-6 overflow-auto rounded-full bg-slate-50 px-8 py-4 text-xl lg:m-auto lg:w-fit lg:overflow-hidden">
        <h2 className="font-medium">Categories</h2>
        <ul className="flex gap-2 font-medium text-purple-500 [&>*]:rounded-full [&>*]:border [&>*]:border-purple-100 [&>*]:border-sky-500/15 [&>*]:px-4 [&>*]:py-0.5 [&>*]:transition-colors [&>*]:hover:cursor-pointer">
          <FilterItem href="/#">Sales</FilterItem>
          <FilterItem href="/#">Marketing</FilterItem>
          <FilterItem href="/#">SEO</FilterItem>
        </ul>
      </div>
    </>
  );
}

export default Filter;

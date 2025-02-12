function FilterItem({ href, isActive, children }) {
  return (
    <>
      <li
        href={href}
        className={`hover:bg-purple-500 ${isActive ? "bg-purple-600 text-white" : "bg-purple-500/10 text-purple-500 hover:text-white"}`}
      >
        {children}
      </li>
    </>
  );
}

export default FilterItem;

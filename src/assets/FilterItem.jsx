function FilterItem({ href, isActive, children }) {
  return (
    <>
      <li
        href={href}
        className={`hover:bg-purple-500 hover:text-white ${isActive ? "bg-purple-300 text-white" : "text-purple-500"}`}
      >
        {children}
      </li>
    </>
  );
}

export default FilterItem;

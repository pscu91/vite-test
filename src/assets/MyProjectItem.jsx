function MyProjectItem({ children }) {
  return (
    <>
      <a href="#" className="truncate rounded-md pl-1 hover:underline">
        {children}
      </a>
    </>
  );
}

export default MyProjectItem;

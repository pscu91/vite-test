function PageTitle({ children }) {
  return (
    <>
      <div className="my-8 text-6xl font-extrabold tracking-tight">
        <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          {children}
        </span>
      </div>
    </>
  );
}

export default PageTitle;

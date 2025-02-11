function MyProjects() {
  return (
    <>
      <details className="mb-4 pl-8 text-left" open>
        <summary className="mb-2 select-none font-semibold">
          My Projects
        </summary>
        <div className="flex flex-col gap-1 pl-2 text-slate-700">
          <a href="#" className="truncate rounded-md pl-1 hover:underline">
            Hospital Website
          </a>
          <a href="#" className="truncate rounded-md pl-1 hover:underline">
            Food SNS Service
          </a>
          <a href="#" className="truncate rounded-md pl-1 hover:underline">
            Productivity App
          </a>
          <a
            href="#"
            className="w-fit rounded-md px-2 py-1 text-sm text-slate-500 transition-colors hover:bg-purple-100"
          >
            + 32 more
          </a>
        </div>
      </details>
    </>
  );
}

export default MyProjects;

import MyProjectItem from "./MyProjectItem";

function MyProjects() {
  return (
    <>
      <details className="mb-4 pl-6 text-left" open>
        <summary className="mb-2 select-none font-semibold">
          My Projects
        </summary>
        <div className="flex flex-col gap-1 pl-2 text-slate-700">
          <MyProjectItem>Hospital Website</MyProjectItem>
          <MyProjectItem>Food SNS Service</MyProjectItem>
          <MyProjectItem>Productivity App</MyProjectItem>
          <a
            className="w-fit rounded-md px-2 py-1 text-sm text-slate-500 transition-colors hover:bg-purple-100"
            href="#"
          >
            + 32 more
          </a>
        </div>
      </details>
    </>
  );
}

export default MyProjects;

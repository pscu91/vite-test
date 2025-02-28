import { useParams } from "react-router-dom";
import ReportCard from "../assets/ReportCard";
import ProjectCard from "../assets/ProjectCard";
import { projectData } from "../data/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseMembers from "../hooks/UseMembers";
import { snsIcons } from "../data/SocialIcons";

function ProjectPage() {
  const { id } = useParams();
  const indexId = Number(id);
  const indexData = projectData.find((item) => item.id === indexId);
  const { members, loading, error } = UseMembers();

  if (loading) {
    return <div className="mt-8 text-center">로딩 중...</div>;
  }

  if (error) {
    return <div className="mt-8 text-center text-red-500">에러: {error}</div>;
  }

  const authorData = members.find(
    (member) => member.id === indexData.author.toString(),
  );

  if (!authorData) {
    return (
      <div className="mt-8 text-center">작성자 정보를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="h-full lg:bg-slate-50">
      <div>
        <div
          className="bg-cover bg-center lg:mb-12"
          style={{ backgroundImage: `url(${indexData.thumbnail})` }}
        >
          <div className="space-y-4 bg-black/50 py-24 text-center backdrop-blur-sm transition-all ease-in hover:backdrop-blur-0">
            <p className="text-5xl text-white sm:text-6xl xl:text-8xl">
              {indexData.title}
            </p>
            <p className="text-xl text-white/80 sm:text-3xl">
              {indexData.subtitle}
            </p>
            <div className="flex justify-center space-x-2 text-white/70">
              <p className="text-xl">{authorData.name}</p>
              <p>|</p>
              <p className="text-xl">{indexData.createDate}</p>
            </div>
          </div>
        </div>

        <div className="m-auto w-4/5 divide-y rounded-lg bg-white py-8 text-left lg:px-24 lg:drop-shadow-lg xl:w-2/3">
          <div>
            <p className="py-8 text-6xl">{indexData.headerContents}</p>
            <p className="pb-4 text-xl first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold">
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
            </p>
            <p className="py-8 text-6xl">{indexData.headerContents}</p>
            <p className="pb-4 text-xl first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold">
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
            </p>
            <p className="pb-4 text-xl">
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
              {indexData.contents}
            </p>
          </div>

          <div className="mt-12">
            <p className="py-8 text-4xl">Reference</p>
            <ReportCard />
            <ReportCard />
          </div>

          <div className="mt-12 flex flex-col items-center space-y-4 py-16">
            <img src={authorData.image} className="h-20 w-20 rounded-full" />
            <div className="space-y-2 text-center">
              <p className="text-2xl font-semibold">{authorData.name}</p>
              <p className="text-lg font-semibold text-purple-600">
                {authorData.position}
              </p>
              <div className="flex justify-center gap-2">
                {authorData.snsIcons &&
                  authorData.snsIcons.map(({ iconName }) => (
                    <a
                      key={iconName}
                      href="#"
                      className="text-xl text-slate-600 transition-colors hover:text-purple-600"
                    >
                      <FontAwesomeIcon icon={snsIcons[iconName]} />
                    </a>
                  ))}
              </div>
            </div>
            <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
              Subscription
            </button>
          </div>

          <div className="py-4 xxl:flex">
            {projectData.slice(0, 5).map((index) => (
              <ProjectCard key={index.id} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

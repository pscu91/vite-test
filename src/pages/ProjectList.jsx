import ThumbnailCard from "../assets/ThumbnailCard.jsx";
import CreateCard from "../assets/CreateCard.jsx";

function ProjectList() {
  return (
    <>
      <div className="flex w-full flex-wrap justify-center md:justify-start">
        <CreateCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
      </div>
    </>
  );
}

export default ProjectList;

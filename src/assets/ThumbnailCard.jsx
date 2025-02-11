import ThumbnailSample from "./img/ThumbnailSample.avif";

function ThumbnailCard() {
  return (
    <>
      <a
        href="#"
        className="group mb-4 w-fit p-4 text-left transition-opacity hover:opacity-80 lg:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5"
      >
        <img className="rounded-lg" src={ThumbnailSample} alt="thumbnail" />
        <div className="mt-4">
          <div className="text-xs font-bold text-purple-500">Private Villa</div>
          <div className="mb-2 mt-1">
            <div
              href="#"
              className="line-clamp-2 font-bold text-gray-700 transition-colors group-hover:text-purple-500"
            >
              Relaxing All-Inclusive Resort in Cancun
            </div>
          </div>
          <span className="rounded-lg bg-slate-50 px-2 py-1 text-xs text-gray-600">
            $299 USD per 🌛
          </span>
        </div>
      </a>
    </>
  );
}

export default ThumbnailCard;

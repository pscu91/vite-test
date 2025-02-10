import ThumbnailSample from "./img/ThumbnailSample.avif";

function ThumbnailCard() {
  return (
    <>
      <div className="xxxl:w-1/5 xxl:w-1/4 xl:w-1/3 mb-4 w-fit p-4 text-left lg:w-1/2">
        <img className="rounded-lg" src={ThumbnailSample} alt="thumbnail" />
        <div className="mt-4">
          <div className="text-xs font-bold text-sky-500">Private Villa</div>
          <div className="mb-2 mt-1">
            <a href="#" className="font-bold text-gray-700">
              Relaxing All-Inclusive Resort in Cancun
            </a>
          </div>
          <span className="rounded-lg bg-slate-50 px-2 py-1 text-xs text-gray-600">
            $299 USD per 🌛
          </span>
        </div>
      </div>
    </>
  );
}

export default ThumbnailCard;

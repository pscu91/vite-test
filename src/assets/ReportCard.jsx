import Photo from "../assets/img/Photo.avif";

function ReportCard() {
  return (
    <>
      <div className="w-full p-4">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <a
            href="#"
            className="group transition-opacity hover:opacity-80 xxl:flex"
          >
            <div className="xxl:flex-shrink-0">
              <img
                className="h-48 w-full object-cover xxl:w-auto"
                src={Photo}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-6 text-left xxl:p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-purple-500">
                Case study
              </div>
              <p className="mt-1 block w-full truncate text-lg font-medium leading-tight text-black group-hover:text-purple-600">
                Finding customers for your new business
              </p>
              <p className="mt-2 line-clamp-3 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ReportCard;

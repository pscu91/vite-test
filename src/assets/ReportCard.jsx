import Photo from "../assets/img/Photo.avif";

function ReportCard() {
  return (
    <>
      <div className="w-full p-4 xl:w-1/2">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="xxxl:flex">
            <div className="xxxl:flex-shrink-0">
              <img
                className="h-48 w-full object-cover xxxl:w-48"
                src={Photo}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-6 text-left xxxl:p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-purple-500">
                Case study
              </div>
              <a
                href="#"
                className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportCard;

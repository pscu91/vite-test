import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function CreateCard() {
  return (
    <>
      <div className="xxxl:w-1/5 xxl:w-1/4 xl:w-1/3 mb-4 w-full p-4 lg:w-1/2">
        <a
          href="#"
          className="group flex h-full w-full flex-col justify-center gap-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-4 text-left hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-purple-500 active:bg-purple-700"
        >
          <div className="flex items-center gap-2 text-xl text-purple-600">
            <FontAwesomeIcon
              className="group-hover:text-white"
              icon={faFolderPlus}
            />
            <h3 class="group-hover:text-white">New project</h3>
          </div>
          <p class="text-gray-500 group-hover:text-white">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>
    </>
  );
}

export default CreateCard;

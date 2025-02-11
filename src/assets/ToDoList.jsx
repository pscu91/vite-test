import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  return (
    <>
      <div className="mb-8 pl-8 text-left">
        <p className="mb-2 font-semibold">Today</p>
        <div className="flex flex-col">
          <label class="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[1]" />
            <p className="text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Create a to do list
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
          <label class="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[2]" />
            <p className="text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Check off first item
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
          <label class="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[3]" />
            <p className="text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Investigate race condition
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default ToDoList;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  return (
    <>
      <details className="pl-8 text-left" open>
        <summary className="mb-2 select-none font-semibold">Today</summary>
        <div className="flex flex-col">
          <label className="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[1]" />
            <p className="truncate text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Create a to do lists
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
          <label className="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[2]" />
            <p className="truncate text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Check off first item
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
          <label className="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
            <input className="peer mr-2" type="checkbox" name="todo[3]" />
            <p className="truncate text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
              Investigate race condition
            </p>
            <FontAwesomeIcon
              className="ml-auto text-slate-600 peer-checked:hidden"
              icon={faXmark}
            />
          </label>
        </div>
      </details>
    </>
  );
}

export default ToDoList;

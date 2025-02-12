import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ToDoItem({ children }) {
  return (
    <>
      <label className="flex items-center rounded-md px-2 py-1 transition-colors hover:bg-purple-100">
        <input className="peer mr-2" type="checkbox" name="todo[1]" />
        <p className="truncate text-slate-800 peer-checked:text-slate-400 peer-checked:line-through">
          {children}
        </p>
        <FontAwesomeIcon
          className="ml-auto text-slate-600 peer-checked:hidden"
          icon={faXmark}
        />
      </label>
    </>
  );
}

export default ToDoItem;

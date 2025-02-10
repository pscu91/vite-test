function ToDoList() {
  return (
    <>
      <div className="mb-8 pl-8 text-left">
        <p className="mb-2 font-semibold">Today</p>
        <div className="flex flex-col">
          <label class="peer w-fit rounded-md px-2 py-1 hover:bg-purple-100">
            <input className="mr-2" type="checkbox" name="todo[1]" />
            Create a to do list
          </label>
          <label class="peer w-fit rounded-md px-2 py-1 hover:bg-purple-100">
            <input className="mr-2" type="checkbox" name="todo[2]" />
            Check off first item
          </label>
          <label class="peer w-fit rounded-md px-2 py-1 hover:bg-purple-100">
            <input className="mr-2" type="checkbox" name="todo[3]" />
            Investigate race condition
          </label>
        </div>
      </div>
    </>
  );
}

export default ToDoList;

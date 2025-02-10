function ToDoList() {
  return (
    <>
      <div className="mb-4 pl-8 text-left">
        <p className="mb-2 font-semibold">Today</p>
        <div className="flex flex-col">
          <label class="peer">
            <input type="checkbox" name="todo[1]" checked />
            Create a to do list
          </label>
          <label class="peer">
            <input type="checkbox" name="todo[1]" />
            Check off first item
          </label>
          <label class="peer">
            <input type="checkbox" name="todo[1]" />
            Investigate race condition
          </label>
        </div>
      </div>
    </>
  );
}

export default ToDoList;

import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <>
      <details className="pl-8 text-left" open>
        <summary className="mb-2 select-none font-semibold">Today</summary>
        <div className="flex flex-col">
          <ToDoItem>Create a to do lists</ToDoItem>
          <ToDoItem>Check off first item</ToDoItem>
          <ToDoItem>Investigate race condition</ToDoItem>
        </div>
      </details>
    </>
  );
}

export default ToDoList;

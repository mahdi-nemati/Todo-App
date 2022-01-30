const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <main class={todo.isComplated ? "" : "flex justify-center"}>
      <section class="bg-red-400 flex items-center text-base mt-7 justify-between w-4/5">
        <div>
          <input checked={todo.isComplated} type="checkbox" />
          <span onClick={onComplete}></span>
          <span onClick={onComplete}>{todo.text}</span>
        </div>
        <div>
          <button
            onClick={onEdit}
            class="bg-zinc-100 border border-purple-600 text-purple-600 pl-3 pr-3 pt-1 pb-1 rounded-md ml-2 sm:pl-5 sm:pr-5"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            class="bg-zinc-100 border border-black text-black pl-3 pr-3 pt-1 pb-1 rounded-md ml-2 sm:pl-5 sm:pr-5"
          >
            Delete
          </button>
        </div>
      </section>
    </main>
  );
};

export default Todo;

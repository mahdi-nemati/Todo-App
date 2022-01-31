import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <main class={todo.isComplated ? 
    "flex justify-center opacity-40 line-through	" 
    : "flex justify-center"}>
      <section class="bg-purple-300 flex items-center text-base 
      mt-7 justify-between w-4/5 sm:w-3/5 sm:text-lg sm:p-3 md:text-xl lg:text-2xl  
         p-2 rounded-xl">
        <div class="flex items-center text-purple-900">
          <input
            onClick={onComplete}
            checked={todo.isComplated}
            type="checkbox"
            class="w-4 h-4 mr-2 cursor-pointer"
          />
          <span onClick={onComplete} class="cursor-pointer">{todo.text}</span>
        </div>
        <div>
          <button
            onClick={onEdit}
            class="bg-white border border-purple-600 text-purple-600 pl-3 pr-3 pt-1 pb-1 rounded-md ml-2 sm:pl-5 sm:pr-5"
          >
            <AiFillEdit />
          </button>
          <button
            onClick={onDelete}
            class="bg-white border border-black text-black pl-3 pr-3 pt-1 pb-1 rounded-md ml-2 sm:pl-5 sm:pr-5"
          >
            <AiFillDelete />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Todo;

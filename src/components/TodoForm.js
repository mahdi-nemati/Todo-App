import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Something!",
      });
    } else {
      props.addTodoHandler(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler} 
    class="w-full flex justify-center text-base 
    sm:text-lg md:text-xl lg:text-2xl lg:w-10/12 ">
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={props.edit ? "Edit todo..." : "Add todo..."}
        ref={inputRef}
        class="outline-none border border-purple-400 
        rounded-md pl-2 w-9/12 focus:border-2 caret-purple-700 sm:pt-1 sm:pb-1"
      />
      <button type="submit"
       class={ props.edit ?
        "bg-zinc-100 border border-purple-600 text-purple-600 pl-3 pr-3 pt-1 pb-1 rounded-md ml-2 sm:pl-5 sm:pr-5" 
      : "bg-purple-600 text-zinc-100 pl-3 pr-3 pt-1 pb-1 rounded-md  ml-2 sm:pl-5 sm:pr-5 " }>
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;

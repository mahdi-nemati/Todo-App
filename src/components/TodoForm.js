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
    <form onSubmit={submitHandler} className="formCon">
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={props.edit ? "Edit todo..." : "Add todo..."}
        ref={inputRef}
        className="inputTodo"
      />
      <button type="submit" className={`${props.edit ? "btn" : "btn add"}`}>
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;

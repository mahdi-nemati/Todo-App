import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import classes from "./TodoApp.module.css";
import { useEffect, useState } from "react";
import TodosStatus from "../Select/Select";
import Swal from "sweetalert2";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplated: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const findedIndex = todos.findIndex((item) => item.id === id);
    const indexStatus = todos[findedIndex].isComplated;
    if (indexStatus === false) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "well done",
        showConfirmButton: false,
        timer: 1100,
      });
    }
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplated = !selectedTodo.isComplated;
    const newTodos = [...todos];
    newTodos[index] = selectedTodo;
    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      }
    });
  };

  const editHandler = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const newTodos = [...todos];
    newTodos[index] = selectedTodo;
    setTodos(newTodos);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      case "All":
        setFilteredTodos(todos);
        break;
      case "complated":
        setFilteredTodos(todos.filter((todo) => todo.isComplated));
        break;
      case "uncomplated":
        setFilteredTodos(todos.filter((todo) => !todo.isComplated));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div>
      <div className="allContainer">
        <TodosStatus
          filterTodos={filterTodos}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <TodoForm
          addTodoHandler={addTodoHandler}
          className={classes.todoForm}
        />
      </div>
      <TodoList
        todos={filteredTodos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default TodoApp;

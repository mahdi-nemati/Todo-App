import "./App.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <section class="flex flex-col items-center">
      <div class="bg-purple-500 w-full mb-5 h-11">
        <h1 class="">TodoList App</h1>
        <p>just do it </p>
      </div>
      <TodoApp />
    </section>
  );
};
export default App;

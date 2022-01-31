import "./App.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <main class="flex flex-col items-center">
      <header class="text-purple-500 w-full mb-5 mt-3 flex 
      justify-center text-xl sm:text-2xl md:text-3xl md:mt-5 md:mb-7 lg:text-4xl ">
        <h1>TodoList App</h1>
      </header>
      <TodoApp />
    </main>
  );
};
export default App;

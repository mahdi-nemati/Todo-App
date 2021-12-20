const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={todo.isComplated ? "complated" : ""}>
      <div className="todo">
        <div>
          <div onClick={onComplete} className="checkCon">
            <span> {todo.text}</span>
          </div>
        </div>
        <div>
          <button onClick={onEdit} className="btn">
            Edit
          </button>
          <button onClick={onDelete} className="btn remove">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

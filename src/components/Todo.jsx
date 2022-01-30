const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={todo.isComplated ? "complated" : ""}>
      <div className="todo">
        <div>
          <label className="tasks-list-item">
            <input
              type="checkbox"
              name="task_1"
              value="1"
              className="tasks-list-cb"
              checked={todo.isComplated}
            />
            <span className="tasks-list-mark" onClick={onComplete}></span>
            <span className="tasks-list-desc checkCon" onClick={onComplete}>
              {todo.text}
            </span>
          </label>
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

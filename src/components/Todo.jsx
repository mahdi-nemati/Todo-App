const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={todo.isComplated ? "complated" : ""}>
      <div className="todo">
        <div>
          <label class="tasks-list-item">
            <input
              type="checkbox"
              name="task_1"
              value="1"
              class="tasks-list-cb"
              checked={todo.isComplated}
            />
            <span class="tasks-list-mark" onClick={onComplete}></span>
            <span class="tasks-list-desc checkCon" onClick={onComplete}>
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

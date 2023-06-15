export function TodoItems({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <>
      <div className="card__content">
        <div className="radio-input">
          <label className="label">
            <input
              type="checkbox"
              onChange={(e) => toggleTodo(id, e.target.checked)}
              checked={completed}
            />
            <span className="check"></span>
          </label>
        </div>
        <p className="listTitle">{title}</p>
        <button onClick={() => deleteTodo(id)} className="btn">
          <span>Delete</span>
        </button>
      </div>
      <hr />
    </>
  );
}

export function TodoItems({ completed, id, title, toggleTodo, deleteTodo }){
return(
    
        <li>
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTodo(id, e.target.checked)}
              checked={completed}
            />
            {title}
          </label>
          <button onClick={() => deleteTodo(id)} className="del">
            Delete
          </button>
        </li>
     
)}
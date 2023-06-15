import { TodoItems } from "./TodoItems";

export default function TodoListB({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="card">
      {todos.length === 0 && "No Todos"}

      {todos.map((todo) => {
        return (
          <TodoItems
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

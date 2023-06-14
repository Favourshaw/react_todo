import { TodoItems } from "./TodoItems";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        <TodoItems
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />;
      })}
    </ul>
  );
}
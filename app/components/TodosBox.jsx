import { Todo } from "./Todo";

export function TodosBox({ filterTodos }) {

  return (
    <ul className="flex flex-col gap-2">
      {
        filterTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </ul >
  );
}
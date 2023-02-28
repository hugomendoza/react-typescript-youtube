import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo
}


export const TodoItem = ({todo}:TodoItemProps) => {

  const { toggleTodo } = useTodos();

  // const handleDbClick = () => {
  //   toggleTodo(todo.id)
  // }

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : ""
      }}
      // onDoubleClick={ handleDbClick }
      onDoubleClick={ () => toggleTodo( todo.id ) }
    >
      {todo.desc}
    </li>
  )
}

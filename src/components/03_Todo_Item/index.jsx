const TodoItem = (props) => {
  const { id, completed, text, onDeleteTodo, onCheckTodo } = props;
  return (
    <li className="todo" key={id} data-completed={completed}>
      <button onClick={() => onDeleteTodo(id)}>
        <i className="fas fa-trash-alt" />
      </button>
      <input
        type="checkbox"
        className="todo-checkbox"
        onClick={() => onCheckTodo(id)}
        checked={completed}
      />
      {text}
    </li>
  );
};
export default TodoItem;

const TodoItem = (props) => {
  const { id, completed, text, onDeleteTodo } = props;
  return (
    <li className="todo" key={id} data-completed={completed}>
      <button onClick={()=> onDeleteTodo(id)}>
        <i className="fas fa-trash-alt" />
      </button>
      <input type="checkbox" className="todo-checkbox" />
      {text}
    </li>
  );
};
export default TodoItem;

import TodoItem from '../03_Todo_Item';

const TodoList = (props) => {
  const { Todolist, onDeleteTodo, onCheckTodo } = props;
  return (
    <section>
      <div className="todos">
        {Todolist.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onDeleteTodo={onDeleteTodo}
            onCheckTodo={onCheckTodo}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;

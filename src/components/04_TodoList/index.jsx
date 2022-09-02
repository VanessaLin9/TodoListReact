import TodoItem from '../03_Todo_Item';
import style from '../../css/style.module.css'

const TodoList = (props) => {
  const { Todolist, onDeleteTodo, onCheckTodo } = props;
  return (
    <section>
      <div className={style.todos}>
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

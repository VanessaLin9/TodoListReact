import cx from 'classnames';
import style from '../../css/style.module.css';

const TodoItem = (props) => {
  const { id, completed, text, onDeleteTodo, onCheckTodo } = props;
  return (
    <li className={style.todo} key={id} data-completed={completed}>
      <button onClick={() => onDeleteTodo(id)}>
        <i className={cx('fas fa-trash-alt')} />
      </button>
      <input
        type="checkbox"
        className={style.todoCheckbox}
        onClick={() => onCheckTodo(id)}
        checked={completed}
      />
      {text}
    </li>
  );
};
export default TodoItem;

import { useState, memo } from 'react';
import style from '../../css/style.module.css'

const Input = memo((props) => {
  const { onAddTodo } = props;
  const [input, setInput] = useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    setInput('');
    if (input.trim() === '') return;
    onAddTodo(input.trim());
  };

  return (
    <section>
      <form onSubmit={atSubmit}>
        <div className={style.input}>
          <button className={style.addBtn} onClick={atSubmit}>
            +
          </button>
          <input
            className={style.inputText}
            type="text"
            placeholder="Add New Test"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>
      </form>
    </section>
  );
});

export default Input;

import { useState, memo } from 'react';

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
        <div className="input">
          <button className="add-btn" onClick={atSubmit}>
            +
          </button>
          <input
            className="input-text"
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

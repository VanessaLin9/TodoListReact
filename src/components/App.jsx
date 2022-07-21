import React from 'react';
// import Input from './01_Input/index';
import Filter from './02_Filter/index';
import Todo from './03_Todo/index';

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const handleClick = () => {
    console.log('click');
    console.log(inputValue);
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <h1>Hihi</h1>
      <h2>Todo List React</h2>
      {/* <Input /> */}
      <section>
        <div className="input">
          <button className="add-btn" onClick={() => handleClick()}>
            +
          </button>
          <input
            className="input-text"
            type="text"
            placeholder="Add New Test"
            value={inputValue}
            onChange={handleInputChange}
            // required
          />
        </div>
      </section>
      {/* input */}
      <Filter />
      <Todo />
    </div>
  );
};

export default App;

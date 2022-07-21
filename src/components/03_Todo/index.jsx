// import React from 'react';

const todoList = [
  { todo: '123', completed: false, id: 0 },
  { todo: '443', completed: true, id: 1 },
];

const Todo = (props) => {
  const { addTodo } = props;
  console.log(addTodo);
  return (
    <section className="todolist">
      <ul id="todos">
        {todoList.map((todo) => {
          return (
            <li
              className="todo checked"
              key={todo.id}
              data-completed={todo.completed}
            >
              <a href="/">
                <i className="far fa-trash-alt trash" />
              </a>
              <input type="checkbox" className="todo-checkbox" />
              {todo.todo}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Todo;

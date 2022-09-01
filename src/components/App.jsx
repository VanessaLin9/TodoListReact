import { useState, useCallback } from 'react';
import Input from './01_Input/index';
import Filter from './02_Filter/index';
import TodoList from './04_TodoList';

const initialTodoList = [
  { id: 0, text: '123', completed: false },
  { id: 1, text: '443', completed: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodoList);

  const atAddTodo = (todo: string) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      text: todo,
      completed: false,
    };
    setTodos((prev) => prev.concat(newTodo));
  };
  const atDeleteTodo = useCallback(
    (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos],
  );
  const atCheckTodo = useCallback(
    (id: string) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      setTodos(newTodos);
    },
    [todos],
  );

  return (
    <div className="container">
      <Input onAddTodo={atAddTodo} />
      <Filter />
      <TodoList
        Todolist={todos}
        onDeleteTodo={atDeleteTodo}
        onCheckTodo={atCheckTodo}
      />
    </div>
  );
};

export default App;

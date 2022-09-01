import { useState, useCallback, useMemo } from 'react';
import Input from './01_Input/index';
import Filter from './02_Filter/index';
import TodoList from './04_TodoList';

type TodoType = {
  id: string,
  text: string,
  completed: Boolean,
};

const initialTodoList: TodoType[] = [
  { id: 0, text: '123', completed: false },
  { id: 1, text: '443', completed: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodoList);
  const [filterType, setFilter] = useState('all');

  const atAddTodo = (todo: string) => {
    const newTodo: TodoType = {
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
      const newTodos = todos.map((todo: TodoType) => {
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
  const atFilterChange = useCallback(
    (filter: string) => {
      setFilter(filter);
    },
    [filterType],
  );

  const filterTodos = useMemo(() => {
    return todos.filter((todo: TodoType) => {
      if (filterType === 'active') {
        return !todo.completed;
      }
      if (filterType === 'completed') {
        return todo.completed;
      }
      return true;
    });
  }, [todos, filterType]);

  return (
    <div className="container">
      <Input onAddTodo={atAddTodo} />
      <Filter onFilterChange={atFilterChange} />
      <TodoList
        Todolist={filterTodos}
        onDeleteTodo={atDeleteTodo}
        onCheckTodo={atCheckTodo}
      />
    </div>
  );
};

export default App;

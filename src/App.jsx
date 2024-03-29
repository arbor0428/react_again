import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const filters = ['all', 'completed', 'active'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} onChangeFilter={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}


// import React from 'react';

const Filter = (props) => {
  const { onFilterChange } = props;
  return (
    <section className="todolist__filter-btns">
      <div className="filter">
        <button
          className="filter-btn"
          id="all"
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className="filter-btn"
          id="active"
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className="filter-btn"
          id="completed"
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default Filter;

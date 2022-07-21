// import React from 'react';

const Filter = () => {
  return (
    <section className="todolist__filter-btns">
      <div className="filter">
        <button className="filter-btn" id="all">
          All
        </button>
        <button className="filter-btn" id="active">
          Active
        </button>
        <button className="filter-btn" id="completed">
          Completed
        </button>
      </div>
    </section>
  );
};

export default Filter;

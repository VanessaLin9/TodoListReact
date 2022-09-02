import style from '../../css/style.module.css'

const Filter = (props) => {
  const { onFilterChange } = props;
  return (
    <section>
      <div className={style.filter}>
        <button
          className={style.filterBtn}
          id="all"
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={style.filterBtn}
          id="active"
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={style.filterBtn}
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

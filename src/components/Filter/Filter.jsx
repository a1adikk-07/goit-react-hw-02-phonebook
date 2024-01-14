import style from '../Filter/filter.module.css';

const Filter = ({ changeFilter }) => {
  return (
    <div className={style.filter}>
      <label htmlFor="filterID">Find contact by name</label>
      <input
        className={style.input}
        onChange={changeFilter}
        id="filterID"
        name="filter"
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;

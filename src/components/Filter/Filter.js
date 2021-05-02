import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <label>
        <b>Find contacts by name:</b>
        <input
          className={style.input}
          type="text"
          name="filter"
          placeholder="Rosie Simpson"
          value={value}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

export default Filter;

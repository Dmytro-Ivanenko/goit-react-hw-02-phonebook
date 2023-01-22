import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.scss';

const Filter = ({ onChangeFilter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} type="text" onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

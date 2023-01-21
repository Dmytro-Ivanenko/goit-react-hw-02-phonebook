import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ type, name, pattern, title }) => {
  return (
    <input type={type} name={name} pattern={pattern} title={title} required />
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;

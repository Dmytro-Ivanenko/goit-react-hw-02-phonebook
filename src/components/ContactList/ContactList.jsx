import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './contactList.module.scss';

const ContactList = ({ contactsArr, deleteFunc }) => {
  return (
    <ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <li key={id} id={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Button type="button" onClickBtn={deleteFunc}>
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

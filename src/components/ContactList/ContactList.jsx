import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactList.module.scss';

const ContactList = ({ contactsArr }) => {
  return (
    <ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
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

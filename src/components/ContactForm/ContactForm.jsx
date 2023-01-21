import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import App from '../App';

import styles from './contactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = (evn) => {
    debugger;
    this.setState({
      [evn.target.name]: [evn.target.name].value,
    });
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Input
          onChange={this.onChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;

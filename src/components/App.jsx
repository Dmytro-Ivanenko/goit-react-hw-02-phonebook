import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filteredList = [];

  //_______________________________APP
  addContacts = (contact) => {
    this.setState({ contacts: contact });
  };

  removeContact = (evn) => {
    const result = this.state.contacts.filter(({ id }) => {
      return !(id === evn.target.parentElement.id);
    });

    this.addContacts(result);
    this.resetFilter();
  };

  // _____________________________ FORM
  handleSubmitForm = (evn) => {
    evn.preventDefault();
    const { name, number } = evn.target.elements;

    // name check
    if (!this.isNameFree(name.value)) {
      return;
    }

    const result = this.state.contacts.slice();

    result.push({
      id: uniqid(),
      name: name.value.toLowerCase(),
      number: number.value,
    });

    // add new array into state
    this.addContacts(result);

    // refresh form
    name.value = '';
    number.value = '';
    this.resetFilter();
  };

  isNameFree = (nameToCheck) => {
    const result = this.state.contacts.filter(
      ({ name }) => name.toLowerCase() === nameToCheck.toLowerCase()
    );

    if (result.length > 0) {
      Notify.warning(`${nameToCheck} is already in contacts.`);
      return false;
    }

    return true;
  };

  // _______________________________FILTER

  onChangeFilter = (evn) => {
    const personName = evn.target.value;

    this.setState({ filter: personName });

    this.filterList(personName.toLowerCase());
  };

  filterList = (personName) => {
    const result = this.state.contacts.filter((elem) => {
      return elem.name.toLowerCase().includes(personName);
    });

    this.filteredList = result;
  };

  resetFilter = () => {
    this.state.filter = '';
    this.filteredList = [];
  };

  // RENDER
  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={this.handleSubmitForm} />
        </Section>

        <Section title="Contacts">
          <Filter onChangeFilter={this.onChangeFilter} />
          <ContactList
            contactsArr={filter.length > 0 ? this.filteredList : contacts}
            deleteFunc={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;

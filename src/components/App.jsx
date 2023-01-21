import React, { Component } from 'react';
import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = (contact) => {
    this.setState({ contacts: contact });
  };

  handleSubmitForm = (evn) => {
    evn.preventDefault();
    const { name, number } = evn.target.elements;

    const result = this.state.contacts.slice();

    result.push({
      name: name.value,
      number: number.value,
    });

    console.log(result);

    // add new array into state
    this.addContacts(result);

    name.value = '';
    number.value = '';
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={this.handleSubmitForm} />
        </Section>

        <Section title="Contacts">кккк</Section>
      </>
    );
  }
}

export default App;

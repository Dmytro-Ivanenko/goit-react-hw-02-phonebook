import React, { Component } from 'react';
import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  setContacts = (value) => {
    console.log(value);
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">кккк</Section>
      </>
    );
  }
}

export default App;

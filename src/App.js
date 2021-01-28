import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
// import initialContacts from './data/contacts.json'

import s from './App.module.css';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    // contacts: initialContacts,
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (newName, number, reset) => {
    if (
      this.state.contacts.find(
        ({ name }) => name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert('Contact is already exist');
      reset();
      return;
    }

    const contact = {
      id: uuid(),
      name: newName,
      number,
    };
    // console.log(contact);
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
    reset();
  };

  deleteContact = uniqId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== uniqId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    console.log('Add componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Add ComponentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.visibleContacts();
    return (
      <div className={s.container}>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onRemove={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

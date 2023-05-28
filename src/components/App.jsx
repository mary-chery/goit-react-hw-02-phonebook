import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearchChange = event => {
    this.setState({ filter: event.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    const doubleContact = contacts.some(
      someContact =>
        someContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (doubleContact) {
      alert(
        `Контакт з іменем ${contact.name} вже присутній у телефонній книзі!`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.phonebookContainer}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <Filter handleSearchChange={this.handleSearchChange} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
        {/* Обратите внимание на изменение здесь */}
      </div>
    );
  }
}

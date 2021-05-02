import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import style from './components/ContactForm/ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = data => {
    const { contacts } = this.state;

    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    const uniaqueName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (newContact.name === '') {
      alert('Вы забыли ввести имя контакта');
    } else if (newContact.number === '') {
      alert('Вы забыли ввести номер контакта');
    } else if (uniaqueName) {
      alert(`${newContact.name} уже есть в списке`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  onFilter = value => {
    this.setState({ filter: value.currentTarget.value });
  };

  filterOfContactsByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    // this.setState({ filter: '' }); --- надо подумать, будет ли очищатся форма после удаления или нет
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={style.container}>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addNewContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onFilter={this.onFilter} />

        <ContactList
          contacts={this.filterOfContactsByName()}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import style from './components/ContactForm/ContactForm.module.css';

// class App extends Component {

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);

//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   onFilter = value => {
//     this.setState({ filter: value.currentTarget.value });
//   };

//   filterOfContactsByName = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//     // this.setState({ filter: '' }); --- надо подумать, будет ли очищатся форма после удаления или нет
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <div className={style.container}>
//         <h1>Phonebook</h1>

//         <ContactForm />

//         <h2>Contacts</h2>

//         <Filter value={filter} onFilter={this.onFilter} />

//         <ContactList
//           contacts={this.filterOfContactsByName()}
//           ondeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {/* <Filter value={filter} onFilter={this.onFilter} /> */}

      {/* <ContactList
          contacts={this.filterOfContactsByName()}
          ondeleteContact={this.deleteContact}
        /> */}
    </div>
  );
}

export default App;

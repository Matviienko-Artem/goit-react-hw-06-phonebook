import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <div>
      <ul className={style.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.list_item}>
              {contact.name}: <b>{contact.number}</b>
              <button
                onClick={() => ondeleteContact(contact.id)}
                className={style.list_item_button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const itemsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = itemsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWCONTACT:
      const newContact = {
        id: uuidv4(),
        name: action.payload.name,
        number: action.payload.number,
      };

      const uniaqueName = state.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      );
      if (newContact.name === '') {
        alert('Вы забыли ввести имя контакта');
      } else if (newContact.number === '') {
        alert('Вы забыли ввести номер контакта');
      } else if (uniaqueName) {
        alert(`${newContact.name} уже есть в списке`);
      } else {
        return [newContact, ...state];
      }

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: '',
});

import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const itemsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = itemsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_CONTACT:
      const uniaqueName = state.find(
        contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
      );
      if (payload.name === '') {
        alert('Вы забыли ввести имя контакта');
      } else if (payload.number === '') {
        alert('Вы забыли ввести номер контакта');
      } else if (uniaqueName) {
        alert(`${payload.name} уже есть в списке`);
      } else {
        return [payload, ...state];
      }

    case actionTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

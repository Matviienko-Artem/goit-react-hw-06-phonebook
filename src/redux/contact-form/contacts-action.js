import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addNewContact = value => ({
  type: actionTypes.ADD_NEW_CONTACT,
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

const FilterByName = value => ({
  type: actionTypes.FILTER_BY_NAME,
  payload: value,
});

const DeleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export { addNewContact, changeFilter, FilterByName, DeleteContact };

import actionTypes from './contacts-types';

const addNewContact = value => ({
  type: actionTypes.ADDNEWCONTACT,
  payload: value,
});

const onFilter = value => ({
  type: actionTypes.ONFILTER,
  payload: value,
});

export { addNewContact, onFilter };

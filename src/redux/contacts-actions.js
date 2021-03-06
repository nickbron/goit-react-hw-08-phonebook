import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addItem = createAction('items/Add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const removeItem = createAction('items/Remove');

const filterItem = createAction('items/Filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addItem, removeItem, filterItem };

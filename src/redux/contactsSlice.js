import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContacts, filterContacts, removeContacts } =
  contactsSlice.actions;

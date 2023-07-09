import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from './initialContacts';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContactsAction: (state, { payload }) => [...state, payload],
    deleteContactsAction: (state, { payload }) => state.filter(contact => contact.id !== payload),
  },
});

export const { addContactsAction, deleteContactsAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
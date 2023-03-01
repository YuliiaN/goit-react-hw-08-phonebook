import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63fcb9478ef914c5559deff4.mockapi.io/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, number }, thunkApi) => {
    try {
      const res = await axios.post('/contacts', { id, name, number });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64785d1c362560649a2d9ce5.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users/?page=${page}&limit=5`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateIsFallow = createAsyncThunk(
  'users/updateIsFallow',
  async ({ id, follow, followers }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        follow: follow,
        followers: followers,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

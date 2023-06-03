import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    // page: 1,
  },
  // reducers: {
  //   incrementPage: state => {
  //     state.page += 1;
  //   },
  // },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
// export const { incrementPage } = usersSlice.actions;

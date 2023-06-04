import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateIsFallow } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // setIsFollow: (state, action) => {
    //   const index = state.items.findIndex(item => item.id === action.payload);
    //   state.items[index].follow = !state.items[index].follow;
    // },
  },
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
    [updateIsFallow.pending](state) {
      state.isLoading = true;
    },
    [updateIsFallow.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [updateIsFallow.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { setIsFollow } = usersSlice.actions;

import {createSlice} from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' };

export const filterSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilters,
  reducers: {
    setFilterContacts: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

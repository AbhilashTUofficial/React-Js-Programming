import {createSlice} from '@reduxjs/toolkit';

const appStateSlice = createSlice({
  name: 'appReducer',
  initialState: {
    data:"something"
    },

  reducers: {

    func: (state, action) => {
      console.log(action)
    },

  },
});

export const {
  func,

} = appStateSlice.actions;

export default appStateSlice.reducer;
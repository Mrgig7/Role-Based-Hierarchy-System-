import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: 'user',
  isAdmin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
      state.isAdmin = action.payload === 'admin';
    },
  },
});

export const { setUser, setRole } = userSlice.actions;
export default userSlice.reducer;
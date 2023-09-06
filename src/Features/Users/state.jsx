import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
const initialState = { user: token ? jwtDecode(token) : null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = jwtDecode(action.payload.token);
    },
  },
});
export const selectUser = (state) => state.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

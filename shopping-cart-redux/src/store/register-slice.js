import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    contactDetailsProvided: false,
    name: "",
    email: "",
  },
  reducers: {
    registerUser(state, action) {
      const newItem = action.payload;
      state.name = newItem.name;
      state.email = newItem.email;
      // password: newItem.password
      state.contactDetailsProvided = true;
    },
    viewInput(state, action) {
      const newItem = action.payload;
      console.log(newItem);
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;

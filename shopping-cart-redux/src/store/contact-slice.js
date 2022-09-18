import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contactDetailsProvided: false,
    userList: [],
  },
  reducers: {
    contactUser(state, action) {
      const newItem = action.payload;
      state.userList.push({
        // id: newItem.id,
        // name: newItem.name,
        // email: newItem.email,
        phone: newItem.phone,
        address: newItem.address,
        // password: newItem.password
      });
    },
    viewInput(state, action) {
      const newItem = action.payload;
      console.log(newItem);
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice;

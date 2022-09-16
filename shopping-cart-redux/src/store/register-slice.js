import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        contactDetailsProvided: false,
        userList: []
    },
    reducers: {
        registerUser(state, action) {
            const newItem = action.payload;
            state.userList.push({
                id: newItem.id,
                name: newItem.name,
                email: newItem.email,
                password: newItem.password
            })

        },
        viewInput(state, action) {
            const newItem = action.payload;
            console.log(newItem)
        }

    }

});

export const registerActions = registerSlice.actions;

export default registerSlice;
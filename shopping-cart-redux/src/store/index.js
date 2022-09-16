import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import registerSlice from './register-slice';
import { reducer } from 'redux-form';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        register: registerSlice.reducer,
        form: reducer,
        ui: uiSlice.reducer
    }
});
export default store;
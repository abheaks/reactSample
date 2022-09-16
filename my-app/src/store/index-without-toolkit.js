import { legacy_createStore as createStore } from "redux";

//import { configureStore } from '@reduxjs/toolkit'

const reducerFn = (state = { counter: 0 }, action) => {

    //Sync function
    //should not mutate the orginal state
    if (action.type === "INC") {
        return { counter: state.counter + 1 };
    }
    if (action.type === "DEC") {
        return { counter: state.counter - 1 };
    }

    if (action.type === "ADD") {
        return { counter: state.counter + action.payload };
    }

    return state;
};

const store = createStore(reducerFn)
//const store = configureStore(reducerFn)


export default store;
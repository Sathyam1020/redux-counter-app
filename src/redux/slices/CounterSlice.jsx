import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0, 
}

export const CounterSlice = createSlice({
    name: "counter", 
    initialState, 
    reducers: {
        increment: (initialState) => {
            initialState.value += 1;
        }, 
        decrement: (initialState) => {
            initialState.value -= 1;
        }, 
    }
})

//* ACTION CREATORS ARE GENERATED FOR EACH REDUCER FUNCTION: 
export const {increment, decrement} = CounterSlice.actions; 

export default CounterSlice.reducer;